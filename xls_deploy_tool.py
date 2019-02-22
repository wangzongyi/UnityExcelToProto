#! /usr/bin/env python
# coding=utf-8

##
# @file:   xls_deploy_tool.py
# @author: jameyli <lgy AT live DOT com>
# @brief:  xls 配置导表工具

# 主要功能：
#     1 配置定义生成，根据excel 自动生成配置的PB定义
#     2 配置数据导入，将配置数据生成PB的序列化后的二进制数据或者文本数据
#
# 说明:
#   1 excel 的前四行用于结构定义, 其余则为数据，按第一行区分, 分别解释：
#       required 必有属性
#       optional 可选属性
#           第二行: 属性类型
#           第三行：属性名
#           第四行：注释
#           数据行：属性值
#       repeated 表明下一个属性是repeated,即数组
#           第二行: repeat的最大次数, excel中会重复列出该属性
#           2011-11-29 做了修改 第二行如果是类型定义的话，则表明该列是repeated
#           但是目前只支持整形
#           第三行：无用
#           第四行：注释
#           数据行：实际的重复次数
#       required_struct 必选结构属性
#       optional_struct 可选结构属性
#           第二行：结构元素个数
#           第三行：结构名
#           第四行：在上层结构中的属性名
#           数据行：不用填

#    1  | required/optional | repeated  | required_struct/optional_struct   |
#       | ------------------| ---------:| ---------------------------------:|
#    2  | 属性类型          |           | 结构元素个数                      |
#    3  | 属性名            |           | 结构类型名                        |
#    4  | 注释说明          |           | 在上层结构中的属性名              |
#    5  | 属性值            |           |                                   |

#
#
# 开始设计的很理想，希望配置定义和配置数据保持一致,使用同一个excel
# 不知道能否实现
#
# 功能基本实现，并验证过可以通过CPP解析
#
# 2011-06-17 修改:
#   表名sheet_name 使用大写
#   结构定义使用大写加下划线
# 2011-06-20 修改bug:
#   excel命名中存在空格
#   repeated_num = 0 时的情况
# 2011-11-24 添加功能
#   默认值
# 2011-11-29 添加功能
# repeated 第二行如果是类型定义的话，则表明该列是repeated
# 但是目前只支持整形

# TODO::
# 1 时间配置人性化
# 2 区分server/client 配置
# 3 repeated 优化
# 4 struct 优化

# 依赖:
# 1 protobuf
# 2 xlrd
##


import xlrd
import sys
import os

# TAP的空格数
TAP_BLANK_NUM = 4

FIELD_RULE_ROW = 0
# 这一行还表示重复的最大个数，或结构体元素数
FIELD_TYPE_ROW = 1
FIELD_NAME_ROW = 2
FIELD_COMMENT_ROW = 3


class LogHelp:
    """日志辅助类"""
    _logger = None
    _close_imme = True

    @staticmethod
    def set_close_flag(flag):
        LogHelp._close_imme = flag

    @staticmethod
    def _initlog():
        import logging

        LogHelp._logger = logging.getLogger()
        logfile = 'tnt_comm_deploy_tool.log'
        hdlr = logging.FileHandler(logfile)
        formatter = logging.Formatter('%(asctime)s|%(levelname)s|%(lineno)d|%(funcName)s|%(message)s')
        hdlr.setFormatter(formatter)
        LogHelp._logger.addHandler(hdlr)
        LogHelp._logger.setLevel(logging.NOTSET)
        # LogHelp._logger.setLevel(logging.WARNING)

        LogHelp._logger.info("\n\n\n")
        LogHelp._logger.info("logger is inited!")

    @staticmethod
    def get_logger():
        if LogHelp._logger is None:
            LogHelp._initlog()

        return LogHelp._logger

    @staticmethod
    def close():
        if LogHelp._close_imme:
            import logging
            if LogHelp._logger is None:
                return
            logging.shutdown()


# log macro


LOG_DEBUG = LogHelp.get_logger().debug
LOG_INFO = LogHelp.get_logger().info
LOG_WARN = LogHelp.get_logger().warning
LOG_ERROR = LogHelp.get_logger().error

proto_path = 'proto/'
txt_path = 'txt'
data_path = 'bytes'


class Sheetinterpreter:
    """通过excel配置生成配置的protobuf定义文件"""

    def __init__(self, xls_file_path, sheet_name):
        self._xls_file_path = xls_file_path
        self._sheet_name = sheet_name

        try:
            self._workbook = xlrd.open_workbook(self._xls_file_path)
        except BaseException as e:
            print("open xls file(%s) failed!" % self._xls_file_path)
            raise
        try:
            self._sheet = self._workbook.sheet_by_name(self._sheet_name)
        except BaseException as e:
            print("open sheet(%s) failed!" % self._sheet_name)
            raise
        # 行数和列数
        self._row_count = len(self._sheet.col_values(0))
        self._col_count = len(self._sheet.row_values(0))

        self._row = 0
        self._col = 0

        # 将所有的输出先写到一个list， 最后统一写到文件
        self._output = []
        # 排版缩进空格数
        self._indentation = 0
        # field number 结构嵌套时使用列表
        # 新增一个结构，行增一个元素，结构定义完成后弹出
        self._field_index_list = [1]
        # 当前行是否输出，避免相同结构重复定义
        self._is_layout = True
        # 保存所有结构的名字
        self._struct_name_list = []
        if not os.path.exists(proto_path):
            os.mkdir(proto_path)

        if not os.path.exists(txt_path):
            os.mkdir(txt_path)

        if not os.path.exists(data_path):
            os.mkdir(data_path)

        self._pb_file_name = sheet_name.lower() + ".proto"

    def interpreter(self):
        """对外的接口"""
        LOG_INFO("begin interpreter, row_count = %d, col_count = %d", self._row_count, self._col_count)

        self.layout_file_header()

        self._output.append("package proto;\n")

        self.layout_struct_head(self._sheet_name)
        self.increase_indentation()

        while self._col < self._col_count:
            self.field_define(0)

        self.decrease_indentation()
        self.layout_struct_tail()

        self.layout_array()

        self.write_to_file()

        LogHelp.close()
        # 将PB转换成py格式
        try:
            command = "protoc --proto_path=./ %s --python_out=./" % (proto_path + self._pb_file_name)
            print(command)
            os.system(command)
        except BaseException as e:
            print("protoc failed!")
            raise

    def field_define(self, repeated_num):
        LOG_INFO("row=%d, col=%d, repeated_num=%d", self._row, self._col, repeated_num)
        field_rule = str(self._sheet.cell_value(FIELD_RULE_ROW, self._col))

        if field_rule == "required" or field_rule == "optional":
            field_type = str(self._sheet.cell_value(FIELD_TYPE_ROW, self._col)).strip()
            field_name = str(self._sheet.cell_value(FIELD_NAME_ROW, self._col)).strip()
            field_comment = self._sheet.cell_value(FIELD_COMMENT_ROW, self._col)

            LOG_INFO("%s|%s|%s|%s", field_rule, field_type, field_name, field_comment)

            comment = field_comment
            self.layout_comment(comment)

            if repeated_num >= 1:
                field_rule = "repeated"

            self.layout_one_field(field_rule, field_type, field_name)

            actual_repeated_num = 1 if (repeated_num == 0) else repeated_num
            self._col += actual_repeated_num

        elif field_rule == "repeated":
            # 2011-11-29 修改
            # 若repeated第二行是类型定义，则表示当前字段是repeated，并且数据在单列用分好相隔
            second_row = str(self._sheet.cell_value(FIELD_TYPE_ROW, self._col)).strip()
            LOG_DEBUG("repeated|%s", second_row)
            # excel有可能有小数点
            if second_row.isdigit() or second_row.find(".") != -1:
                # 这里后面一般会是一个结构体
                repeated_num = int(float(second_row))
                LOG_INFO("%s|%d", field_rule, repeated_num)
                self._col += 1
                self.field_define(repeated_num)
            else:
                # 一般是简单的单字段，数值用分号相隔
                field_type = second_row
                field_name = str(self._sheet.cell_value(FIELD_NAME_ROW, self._col)).strip()
                field_comment = self._sheet.cell_value(FIELD_COMMENT_ROW, self._col)
                LOG_INFO("%s|%s|%s|%s", field_rule, field_type, field_name, field_comment)

                comment = field_comment
                self.layout_comment(comment)

                self.layout_one_field(field_rule, field_type, field_name)

                self._col += 1

        elif field_rule == "required_struct" or field_rule == "optional_struct":
            field_num = int(self._sheet.cell_value(FIELD_TYPE_ROW, self._col))
            struct_name = str(self._sheet.cell_value(FIELD_NAME_ROW, self._col)).strip()
            field_name = str(self._sheet.cell_value(FIELD_COMMENT_ROW, self._col)).strip()

            LOG_INFO("%s|%d|%s|%s", field_rule, field_num, struct_name, field_name)

            if self.is_struct_defined(struct_name):
                self._is_layout = False
            else:
                self._struct_name_list.append(struct_name)
                self._is_layout = True

            col_begin = self._col
            self.struct_define(struct_name, field_num)
            col_end = self._col

            self._is_layout = True

            if repeated_num >= 1:
                field_rule = "repeated"
            elif field_rule == "required_struct":
                field_rule = "required"
            else:
                field_rule = "optional"

            self.layout_one_field(field_rule, struct_name, field_name)

            actual_repeated_num = 1 if (repeated_num == 0) else repeated_num
            self._col += (actual_repeated_num - 1) * (col_end - col_begin)
        else:
            self._col += 1
            return

    def is_struct_defined(self, struct_name):
        for name in self._struct_name_list:
            if name == struct_name:
                return True
        return False

    def struct_define(self, struct_name, field_num):
        """嵌套结构定义"""

        self._col += 1
        self.layout_struct_head(struct_name)
        self.increase_indentation()
        self._field_index_list.append(1)

        while field_num > 0:
            self.field_define(0)
            field_num -= 1

        self._field_index_list.pop()
        self.decrease_indentation()
        self.layout_struct_tail()

    def layout_file_header(self):
        """生成PB文件的描述信息"""
        self._output.append("/**\n")
        self._output.append("* @file:   " + self._pb_file_name + "\n")
        self._output.append("* @author: jameyli <jameyli AT tencent DOT com>\n")
        self._output.append("* @brief:  这个文件是通过工具自动生成的，建议不要手动修改\n")
        self._output.append("*/\n")
        self._output.append("\n")
        self._output.append("syntax = \"proto3\";\n")
        self._output.append("\n")

    def layout_struct_head(self, struct_name):
        """生成结构头"""
        if not self._is_layout:
            return
        self._output.append("\n")
        self._output.append(" " * self._indentation + "message " + struct_name + "{\n")

    def layout_struct_tail(self):
        """生成结构尾"""
        if not self._is_layout:
            return
        self._output.append(" " * self._indentation + "}\n")
        self._output.append("\n")

    def layout_comment(self, comment):
        # 改用C风格的注释，防止会有分行
        if not self._is_layout:
            return
        if comment.count("\n") > 1:
            if comment[-1] != '\n':
                comment = comment + "\n"
                comment = comment.replace("\n", "\n" + " " * (self._indentation + TAP_BLANK_NUM),
                                          comment.count("\n") - 1)
                self._output.append(" " * self._indentation + "/** " + comment + " " * self._indentation + "*/\n")
        else:
            self._output.append(" " * self._indentation + "/** " + comment + " */\n")

    def layout_one_field(self, field_rule, field_type, field_name):
        """输出一行定义"""
        if not self._is_layout:
            return

        if field_rule == "required" or field_rule == "optional":
            self._output.append(" " * self._indentation + field_type \
                                + " " + field_name + " = " + self.get_and_add_field_index() + ";\n")
        else:
            self._output.append(" " * self._indentation + field_rule + " " + field_type \
                            + " " + field_name + " = " + self.get_and_add_field_index() + ";\n")

        '''
        if field_name.find('=') > 0:
            name_and_value = field_name.split('=')
            self._output.append(" " * self._indentation + field_rule + " " + field_type \
                                + " " + str(name_and_value[0]).strip() + " = " + self.get_and_add_field_index() \
                                + " [default = " + str(name_and_value[1]).strip() + "]" + ";\n")
            return
        
        if field_rule != "required" and field_rule != "optional":
            self._output.append(" " * self._indentation + field_rule + " " + field_type \
                                + " " + field_name + " = " + self.get_and_add_field_index() + ";\n")
            return

        if field_type == "int32" or field_type == "int64" \
                or field_type == "uint32" or field_type == "uint64" \
                or field_type == "sint32" or field_type == "sint64" \
                or field_type == "fixed32" or field_type == "fixed64" \
                or field_type == "sfixed32" or field_type == "sfixed64" \
                or field_type == "double" or field_type == "float":
            self._output.append(" " * self._indentation + field_rule + " " + field_type \
                                + " " + field_name + " = " + self.get_and_add_field_index() + ";\n")
        elif field_type == "string" or field_type == "bytes":
            self._output.append(" " * self._indentation + field_rule + " " + field_type \
                                + " " + field_name + " = " + self.get_and_add_field_index() + ";\n")
        else:
            self._output.append(" " * self._indentation + field_rule + " " + field_type \
                                + " " + field_name + " = " + self.get_and_add_field_index() + ";\n")
        return
        '''

    def increase_indentation(self):
        """增加缩进"""
        self._indentation += TAP_BLANK_NUM

    def decrease_indentation(self):
        """减少缩进"""
        self._indentation -= TAP_BLANK_NUM

    def get_and_add_field_index(self):
        """获得字段的序号, 并将序号增加"""
        index = str(self._field_index_list[- 1])
        self._field_index_list[-1] += 1
        return index

    def layout_array(self):
        """输出数组定义"""
        self._output.append("message " + self._sheet_name + "_ARRAY {\n")
        self._output.append("    repeated " + self._sheet_name + " items = 1;\n}\n")

    def write_to_file(self):
        """输出到文件"""
        print(proto_path + self._pb_file_name)
        pb_file = open(proto_path + self._pb_file_name, "w+")
        pb_file.writelines(self._output)
        pb_file.close()


class DataParser:
    """解析excel的数据"""

    def __init__(self, xls_file_path, sheet_name):
        self._xls_file_path = xls_file_path
        self._sheet_name = sheet_name

        try:
            self._workbook = xlrd.open_workbook(self._xls_file_path)
        except BaseException as e:
            print("open xls file(%s) failed!" % self._xls_file_path)
            raise

        try:
            self._sheet = self._workbook.sheet_by_name(self._sheet_name)
        except BaseException as e:
            print("open sheet(%s) failed!" % self._sheet_name)
            raise

        self._row_count = len(self._sheet.col_values(0))
        self._col_count = len(self._sheet.row_values(0))

        self._row = 0
        self._col = 0

        try:
            self._module_name = self._sheet_name.lower() + "_pb2"
            sys.path.append(os.getcwd())
            sys.path.append(os.getcwd() + '/' + proto_path)
            exec('from ' + self._module_name + ' import *')
            self._module = sys.modules[self._module_name]
        except BaseException as e:
            print("load module(%s) failed" % self._module_name)
            raise

    def parse(self):
        """对外的接口:解析数据"""
        LOG_INFO("begin parse, row_count = %d, col_count = %d", self._row_count, self._col_count)

        item_array = getattr(self._module, self._sheet_name + '_ARRAY')()

        # 先找到定义ID的列
        id_col = 0
        for id_col in range(0, self._col_count):
            info_id = str(self._sheet.cell_value(self._row, id_col)).strip()
            if info_id == "":
                continue
            else:
                break

        for self._row in range(4, self._row_count):
            # 如果 id 是 空 直接跳过改行
            info_id = str(self._sheet.cell_value(self._row, id_col)).strip()
            if info_id == "":
                LOG_WARN("%d is None", self._row)
                continue
            item = item_array.items.add()
            try:
                self.parse_line(item)
            except BaseException as e:
                print("parse_line error:", e)

        LOG_INFO("parse result:\n%s", item_array)
        self.write_readable_data_to_file(str(item_array))
        data = item_array.SerializeToString()
        self.write_data_to_file(data)

        # comment this line for test .by kevin at 2013年1月12日 17:23:35
        LogHelp.close()

    def parse_line(self, item):
        LOG_INFO("%d", self._row)
        self._col = 0
        while self._col < self._col_count:
            self.parse_field(0, 0, item)

    def parse_field(self, max_repeated_num, repeated_num, item):
        field_rule = str(self._sheet.cell_value(0, self._col)).strip()

        if field_rule == "required" or field_rule == "optional":
            field_name = str(self._sheet.cell_value(2, self._col)).strip()
            if field_name.find('=') > 0:
                name_and_value = field_name.split('=')
                field_name = str(name_and_value[0]).strip()
            field_type = str(self._sheet.cell_value(1, self._col)).strip()

            LOG_INFO("row:%d|col:%d", self._row, self._col)
            LOG_INFO("field_rule:%s|field_type:%s|field_name:%s", field_rule, field_type, field_name)

            if max_repeated_num == 0:
                field_value = self.get_field_value(field_type, self._row, self._col)
                # 有value才设值
                if field_value is not None:
                    item.__setattr__(field_name, field_value)
                self._col += 1
            else:
                if repeated_num == 0:
                    if field_rule == "required":
                        print("required but repeated_num = 0")
                        # raise
                else:
                    for col in range(self._col, self._col + repeated_num):
                        field_value = self.get_field_value(field_type, self._row, col)
                        # 有value才设值
                        if field_value is not None:
                            item.__getattribute__(field_name).append(field_value)
                self._col += max_repeated_num

        elif field_rule == "repeated":
            # 2011-11-29 修改
            # 若repeated第二行是类型定义，则表示当前字段是repeated，并且数据在单列用分好相隔
            second_row = str(self._sheet.cell_value(FIELD_TYPE_ROW, self._col)).strip()
            LOG_DEBUG("repeated|second_row:%s", second_row)
            # excel有可能有小数点
            if second_row.isdigit() or second_row.find(".") != -1:
                # 这里后面一般会是一个结构体
                max_repeated_num = int(float(second_row))
                read = self._sheet.cell_value(self._row, self._col)
                repeated_num = 0 if read == "" else int(self._sheet.cell_value(self._row, self._col))

                LOG_INFO("field_rule:%s|max_repeated_num:%d|repeated_num:%d", field_rule, max_repeated_num, repeated_num)

                if max_repeated_num == 0:
                    print("max repeated num shouldn't be 0")
                    # raise

                if repeated_num > max_repeated_num:
                    repeated_num = max_repeated_num

                self._col += 1
                self.parse_field(max_repeated_num, repeated_num, item)
            else:
                # 一般是简单的单字段，数值用分号相隔
                # 一般也只能是数字类型
                field_type = second_row
                field_name = str(self._sheet.cell_value(FIELD_NAME_ROW, self._col)).strip()
                field_value_str = self._sheet.cell_value(self._row, self._col)
                # field_value_str = unicode(self._sheet.cell_value(self._row, self._col)).strip()

                # LOG_INFO("%d|%d|%s|%s|%s",
                #         self._row, self._col, field_rule, field_type, field_name, field_value_str)

                # 2013-01-24 jamey
                # 增加长度判断
                if len(field_value_str) > 0:
                    if field_value_str.find(";\n") > 0:
                        field_value_list = field_value_str.split(";\n")
                    else:
                        field_value_list = field_value_str.split(";")

                    for field_value in field_value_list:
                        if field_type == "bytes":
                            item.__getattribute__(field_name).append(field_value.encode("utf8"))
                        else:
                            item.__getattribute__(field_name).append(int(float(field_value)))

                self._col += 1

        elif field_rule == "required_struct" or field_rule == "optional_struct":
            field_num = int(self._sheet.cell_value(FIELD_TYPE_ROW, self._col))
            struct_name = str(self._sheet.cell_value(FIELD_NAME_ROW, self._col)).strip()
            field_name = str(self._sheet.cell_value(FIELD_COMMENT_ROW, self._col)).strip()

            LOG_INFO("%s|%d|%s|%s", field_rule, field_num, struct_name, field_name)
            col_begin = self._col

            # 至少循环一次
            if max_repeated_num == 0:
                struct_item = item.__getattribute__(field_name)
                self.parse_struct(field_num, struct_item)

            else:
                if repeated_num == 0:
                    if field_rule == "required_struct":
                        print("required but repeated_num = 0")
                        # raise
                    # 先读取再删除掉
                    struct_item = item.__getattribute__(field_name).add()
                    self.parse_struct(field_num, struct_item)
                    item.__getattribute__(field_name).__delitem__(-1)
                else:
                    for num in range(0, repeated_num):
                        struct_item = item.__getattribute__(field_name).add()
                        self.parse_struct(field_num, struct_item)

            col_end = self._col

            max_repeated_num = 1 if (max_repeated_num == 0) else max_repeated_num
            actual_repeated_num = 1 if (repeated_num == 0) else repeated_num
            self._col += (max_repeated_num - actual_repeated_num) * ((col_end - col_begin) // actual_repeated_num)
        else:
            self._col += 1
            return

    def parse_struct(self, field_num, struct_item):
        """嵌套结构数据读取"""
        # 跳过结构体定义
        self._col += 1
        while field_num > 0:
            self.parse_field(0, 0, struct_item)
            field_num -= 1

    def get_field_value(self, field_type, row, col):
        """将pb类型转换为python类型"""

        filed_id = self._sheet.cell_value(row, 1)
        field_value = self._sheet.cell_value(row, col)
        field_name = self._sheet.cell_value(2, col)
        LOG_INFO("%s|%d|%d|%s", filed_id, row, col, field_value)

        try:
            if field_type == "int32" or field_type == "int64" \
                    or field_type == "uint32" or field_type == "uint64" \
                    or field_type == "sint32" or field_type == "sint64" \
                    or field_type == "fixed32" or field_type == "fixed64" \
                    or field_type == "sfixed32" or field_type == "sfixed64":
                if len(str(field_value).strip()) <= 0:
                    return None
                else:
                    return int(field_value)
            elif field_type == "double" or field_type == "float":
                if len(str(field_value).strip()) <= 0:
                    return None
                else:
                    return float(field_value)
            elif field_type == "string":
                field_value = field_value
                if len(field_value) <= 0:
                    return None
                else:
                    return field_value
            elif field_type == "bytes":
                field_value = str(field_value).encode('utf-8')
                if len(field_value) <= 0:
                    return None
                else:
                    return field_value
            else:
                return None
        except BaseException as error:
            print("param:%s parse cell(%u, %u) error, please check it, maybe type is wrong.%s" % (field_name, row, col, error))
            raise

    def write_data_to_file(self, data):
        file_name = self._sheet_name.lower() + ".bytes"
        file = open(data_path + '/' + file_name, 'wb+')
        file.write(data)
        file.close()

    def write_readable_data_to_file(self, data):
        file_name = self._sheet_name.lower() + ".txt"
        file = open(txt_path + '/' + file_name, 'wb+')
        file.write(data.encode('utf-8'))
        file.close()


if __name__ == '__main__':
    """入口"""

    '''
    if len(sys.argv) < 3:
        print("Usage: %s sheet_name(should be upper) xls_file" % (sys.argv[0]))
        sys.exit(-1)

    # option 0 生成proto和data 1 只生成proto 2 只生成data
    op = 0
    if len(sys.argv) > 3:
        op = int(sys.argv[3])

    sheet_name = sys.argv[1]
    if not sheet_name.isupper():
        print("sheet_name should be upper")
        sys.exit(-2)

    xls_file_path = sys.argv[2]
    '''

    op, xls_file_path, sheet_name = 0, "xls/goods_info.xls", "GOODS_INFO"

    if op == 0 or op == 1:
        try:
            tool = Sheetinterpreter(xls_file_path, sheet_name)
            tool.interpreter()
        except BaseException as e:
            print("interpreter Failed!!!")
            print(e)
            sys.exit(-3)

        print("interpreter Success!!!")

    if op == 0 or op == 2:
        try:
            parser = DataParser(xls_file_path, sheet_name)
            parser.parse()
        except BaseException as e:
            print("Parse Failed!!!")
            print(1002, e)
            sys.exit(-4)

        print("Parse Success!!!")
