/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto = (function() {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    var proto = {};

    proto.GoodsInfo = (function() {

        /**
         * Properties of a GoodsInfo.
         * @memberof proto
         * @interface IGoodsInfo
         * @property {number|null} [goodsId] 商品ID
         * @property {string|null} [name] 商品名
         * @property {number|null} [sex] 性别
         * 不限制：100
         * male：101
         * female：102
         * @property {number|null} [levelLimit] 等级限制
         * @property {number|null} [clubVipLevel] 达人俱乐部等级限制（普通商品不用配置或配置0）
         * @property {number|null} [qb_2] 2Q币专区（普通商品不用配置或配置0）
         * @property {number|null} [consumeType] GoodsInfo consumeType
         * @property {number|null} [timeUnit] 计时单位
         * 0 默认(天)
         * 1 分钟
         * 2 小时
         * 3 天
         * 4 月
         * 5 年
         * @property {number|null} [isOnline] 是否商城上架显示（根据需要配置上下架时间）
         * 0 否
         * 1 是
         * @property {number|null} [canBuy] 能否购买（已上架物品必然可买，根据需要配置上下架时间）
         * 0 否
         * 1 是
         * @property {number|null} [canRecharge] 可否续费
         * 0 否
         * 1 是
         * @property {string|null} [onlineTime] GoodsInfo onlineTime
         * @property {string|null} [offlineTime] 下架时间
         * (YYYY-MM-DD HH:MM:SS)
         * 
         * 1.不填表示用不下架
         * 2.下架的最终确定需结合“有效时间”、“是否上架”
         * @property {Array.<number>|null} [privilegedPlatIdList] GoodsInfo privilegedPlatIdList
         * @property {number|null} [privilegedPlatIsOnline] 是否商城上架显示
         * （根据需要配置上下架时间）
         * 0 否
         * 1 是
         * @property {number|null} [privilegedPlatCanBuy] 能否购买
         * （已上架物品必然可买，根据需要配置上下架时间）
         * 0 否
         * 1 是
         * @property {number|null} [privilegedPlatCanRecharge] 可否续费
         * 0 否
         * 1 是
         * @property {number|null} [paymentTerms] 支付方式
         * 0 默认不限
         * 1 只限QB
         * 2 只限点券
         * @property {string|null} [validTime] 有效时间
         * （过期会从背包删除）
         * 需要再添加
         * 格式如下，日期和时间中间是空格，不是换行！
         * 2011-10-10 00:00:00
         * @property {number|null} [sortPriority] 排序优先级
         * 
         * 1~? 优先级递减
         * 0 最低优先级
         * @property {number|null} [suitNumber] 配套编号
         * 
         * -1 散装
         * 0 子id相同默认成套
         * 1~9999 配套编号（允许不同子id）
         * @property {number|null} [bagSortPriority] 背包排序优先级
         * 
         * 0~正数优先级递增
         * 
         * 背包排序有较复杂的具体排序逻辑。本数值只用于背包中的【其他】物品的排序
         * @property {string|null} [status] GoodsInfo status
         * @property {number|null} [rank] GoodsInfo rank
         * @property {number|null} [priceDiscount] 折扣（1-100）
         * @property {number|null} [vipDiscount] VIP折扣（1-100）
         * @property {Array.<proto.GoodsInfo.IPrice>|null} [priceTable] GoodsInfo priceTable
         * @property {Array.<proto.GoodsInfo.IGoodsAttr>|null} [goodsAttr] GoodsInfo goodsAttr
         * @property {string|null} [description] 商品详情
         * @property {number|null} [limitId] 商城购买的限制id
         * 详细配置在
         * limitation表
         * @property {string|null} [subSystemId] 使用 跳转id
         */

        /**
         * Constructs a new GoodsInfo.
         * @memberof proto
         * @classdesc Represents a GoodsInfo.
         * @implements IGoodsInfo
         * @constructor
         * @param {proto.IGoodsInfo=} [properties] Properties to set
         */
        function GoodsInfo(properties) {
            this.privilegedPlatIdList = [];
            this.priceTable = [];
            this.goodsAttr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * 商品ID
         * @member {number} goodsId
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.goodsId = 0;

        /**
         * 商品名
         * @member {string} name
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.name = "";

        /**
         * 性别
         * 不限制：100
         * male：101
         * female：102
         * @member {number} sex
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.sex = 0;

        /**
         * 等级限制
         * @member {number} levelLimit
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.levelLimit = 0;

        /**
         * 达人俱乐部等级限制（普通商品不用配置或配置0）
         * @member {number} clubVipLevel
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.clubVipLevel = 0;

        /**
         * 2Q币专区（普通商品不用配置或配置0）
         * @member {number} qb_2
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.qb_2 = 0;

        /**
         * GoodsInfo consumeType.
         * @member {number} consumeType
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.consumeType = 0;

        /**
         * 计时单位
         * 0 默认(天)
         * 1 分钟
         * 2 小时
         * 3 天
         * 4 月
         * 5 年
         * @member {number} timeUnit
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.timeUnit = 0;

        /**
         * 是否商城上架显示（根据需要配置上下架时间）
         * 0 否
         * 1 是
         * @member {number} isOnline
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.isOnline = 0;

        /**
         * 能否购买（已上架物品必然可买，根据需要配置上下架时间）
         * 0 否
         * 1 是
         * @member {number} canBuy
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.canBuy = 0;

        /**
         * 可否续费
         * 0 否
         * 1 是
         * @member {number} canRecharge
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.canRecharge = 0;

        /**
         * GoodsInfo onlineTime.
         * @member {string} onlineTime
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.onlineTime = "";

        /**
         * 下架时间
         * (YYYY-MM-DD HH:MM:SS)
         * 
         * 1.不填表示用不下架
         * 2.下架的最终确定需结合“有效时间”、“是否上架”
         * @member {string} offlineTime
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.offlineTime = "";

        /**
         * GoodsInfo privilegedPlatIdList.
         * @member {Array.<number>} privilegedPlatIdList
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.privilegedPlatIdList = $util.emptyArray;

        /**
         * 是否商城上架显示
         * （根据需要配置上下架时间）
         * 0 否
         * 1 是
         * @member {number} privilegedPlatIsOnline
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.privilegedPlatIsOnline = 0;

        /**
         * 能否购买
         * （已上架物品必然可买，根据需要配置上下架时间）
         * 0 否
         * 1 是
         * @member {number} privilegedPlatCanBuy
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.privilegedPlatCanBuy = 0;

        /**
         * 可否续费
         * 0 否
         * 1 是
         * @member {number} privilegedPlatCanRecharge
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.privilegedPlatCanRecharge = 0;

        /**
         * 支付方式
         * 0 默认不限
         * 1 只限QB
         * 2 只限点券
         * @member {number} paymentTerms
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.paymentTerms = 0;

        /**
         * 有效时间
         * （过期会从背包删除）
         * 需要再添加
         * 格式如下，日期和时间中间是空格，不是换行！
         * 2011-10-10 00:00:00
         * @member {string} validTime
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.validTime = "";

        /**
         * 排序优先级
         * 
         * 1~? 优先级递减
         * 0 最低优先级
         * @member {number} sortPriority
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.sortPriority = 0;

        /**
         * 配套编号
         * 
         * -1 散装
         * 0 子id相同默认成套
         * 1~9999 配套编号（允许不同子id）
         * @member {number} suitNumber
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.suitNumber = 0;

        /**
         * 背包排序优先级
         * 
         * 0~正数优先级递增
         * 
         * 背包排序有较复杂的具体排序逻辑。本数值只用于背包中的【其他】物品的排序
         * @member {number} bagSortPriority
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.bagSortPriority = 0;

        /**
         * GoodsInfo status.
         * @member {string} status
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.status = "";

        /**
         * GoodsInfo rank.
         * @member {number} rank
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.rank = 0;

        /**
         * 折扣（1-100）
         * @member {number} priceDiscount
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.priceDiscount = 0;

        /**
         * VIP折扣（1-100）
         * @member {number} vipDiscount
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.vipDiscount = 0;

        /**
         * GoodsInfo priceTable.
         * @member {Array.<proto.GoodsInfo.IPrice>} priceTable
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.priceTable = $util.emptyArray;

        /**
         * GoodsInfo goodsAttr.
         * @member {Array.<proto.GoodsInfo.IGoodsAttr>} goodsAttr
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.goodsAttr = $util.emptyArray;

        /**
         * 商品详情
         * @member {string} description
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.description = "";

        /**
         * 商城购买的限制id
         * 详细配置在
         * limitation表
         * @member {number} limitId
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.limitId = 0;

        /**
         * 使用 跳转id
         * @member {string} subSystemId
         * @memberof proto.GoodsInfo
         * @instance
         */
        GoodsInfo.prototype.subSystemId = "";

        /**
         * Creates a new GoodsInfo instance using the specified properties.
         * @function create
         * @memberof proto.GoodsInfo
         * @static
         * @param {proto.IGoodsInfo=} [properties] Properties to set
         * @returns {proto.GoodsInfo} GoodsInfo instance
         */
        GoodsInfo.create = function create(properties) {
            return new GoodsInfo(properties);
        };

        /**
         * Encodes the specified GoodsInfo message. Does not implicitly {@link proto.GoodsInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.GoodsInfo
         * @static
         * @param {proto.IGoodsInfo} message GoodsInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GoodsInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.goodsId != null && message.hasOwnProperty("goodsId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.goodsId);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.sex);
            if (message.levelLimit != null && message.hasOwnProperty("levelLimit"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.levelLimit);
            if (message.clubVipLevel != null && message.hasOwnProperty("clubVipLevel"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.clubVipLevel);
            if (message.qb_2 != null && message.hasOwnProperty("qb_2"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.qb_2);
            if (message.consumeType != null && message.hasOwnProperty("consumeType"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.consumeType);
            if (message.timeUnit != null && message.hasOwnProperty("timeUnit"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.timeUnit);
            if (message.isOnline != null && message.hasOwnProperty("isOnline"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.isOnline);
            if (message.canBuy != null && message.hasOwnProperty("canBuy"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.canBuy);
            if (message.canRecharge != null && message.hasOwnProperty("canRecharge"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.canRecharge);
            if (message.onlineTime != null && message.hasOwnProperty("onlineTime"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.onlineTime);
            if (message.offlineTime != null && message.hasOwnProperty("offlineTime"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.offlineTime);
            if (message.privilegedPlatIdList != null && message.privilegedPlatIdList.length) {
                writer.uint32(/* id 14, wireType 2 =*/114).fork();
                for (var i = 0; i < message.privilegedPlatIdList.length; ++i)
                    writer.uint32(message.privilegedPlatIdList[i]);
                writer.ldelim();
            }
            if (message.privilegedPlatIsOnline != null && message.hasOwnProperty("privilegedPlatIsOnline"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.privilegedPlatIsOnline);
            if (message.privilegedPlatCanBuy != null && message.hasOwnProperty("privilegedPlatCanBuy"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.privilegedPlatCanBuy);
            if (message.privilegedPlatCanRecharge != null && message.hasOwnProperty("privilegedPlatCanRecharge"))
                writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.privilegedPlatCanRecharge);
            if (message.paymentTerms != null && message.hasOwnProperty("paymentTerms"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.paymentTerms);
            if (message.validTime != null && message.hasOwnProperty("validTime"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.validTime);
            if (message.sortPriority != null && message.hasOwnProperty("sortPriority"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.sortPriority);
            if (message.suitNumber != null && message.hasOwnProperty("suitNumber"))
                writer.uint32(/* id 21, wireType 0 =*/168).int32(message.suitNumber);
            if (message.bagSortPriority != null && message.hasOwnProperty("bagSortPriority"))
                writer.uint32(/* id 22, wireType 0 =*/176).uint32(message.bagSortPriority);
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.status);
            if (message.rank != null && message.hasOwnProperty("rank"))
                writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.rank);
            if (message.priceDiscount != null && message.hasOwnProperty("priceDiscount"))
                writer.uint32(/* id 25, wireType 0 =*/200).uint32(message.priceDiscount);
            if (message.vipDiscount != null && message.hasOwnProperty("vipDiscount"))
                writer.uint32(/* id 26, wireType 0 =*/208).uint32(message.vipDiscount);
            if (message.priceTable != null && message.priceTable.length)
                for (var i = 0; i < message.priceTable.length; ++i)
                    $root.proto.GoodsInfo.Price.encode(message.priceTable[i], writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
            if (message.goodsAttr != null && message.goodsAttr.length)
                for (var i = 0; i < message.goodsAttr.length; ++i)
                    $root.proto.GoodsInfo.GoodsAttr.encode(message.goodsAttr[i], writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 29, wireType 2 =*/234).string(message.description);
            if (message.limitId != null && message.hasOwnProperty("limitId"))
                writer.uint32(/* id 30, wireType 0 =*/240).uint32(message.limitId);
            if (message.subSystemId != null && message.hasOwnProperty("subSystemId"))
                writer.uint32(/* id 31, wireType 2 =*/250).string(message.subSystemId);
            return writer;
        };

        /**
         * Encodes the specified GoodsInfo message, length delimited. Does not implicitly {@link proto.GoodsInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.GoodsInfo
         * @static
         * @param {proto.IGoodsInfo} message GoodsInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GoodsInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GoodsInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.GoodsInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.GoodsInfo} GoodsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GoodsInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.GoodsInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.goodsId = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.sex = reader.uint32();
                    break;
                case 4:
                    message.levelLimit = reader.uint32();
                    break;
                case 5:
                    message.clubVipLevel = reader.int32();
                    break;
                case 6:
                    message.qb_2 = reader.int32();
                    break;
                case 7:
                    message.consumeType = reader.uint32();
                    break;
                case 8:
                    message.timeUnit = reader.uint32();
                    break;
                case 9:
                    message.isOnline = reader.uint32();
                    break;
                case 10:
                    message.canBuy = reader.uint32();
                    break;
                case 11:
                    message.canRecharge = reader.uint32();
                    break;
                case 12:
                    message.onlineTime = reader.string();
                    break;
                case 13:
                    message.offlineTime = reader.string();
                    break;
                case 14:
                    if (!(message.privilegedPlatIdList && message.privilegedPlatIdList.length))
                        message.privilegedPlatIdList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.privilegedPlatIdList.push(reader.uint32());
                    } else
                        message.privilegedPlatIdList.push(reader.uint32());
                    break;
                case 15:
                    message.privilegedPlatIsOnline = reader.uint32();
                    break;
                case 16:
                    message.privilegedPlatCanBuy = reader.uint32();
                    break;
                case 17:
                    message.privilegedPlatCanRecharge = reader.uint32();
                    break;
                case 18:
                    message.paymentTerms = reader.uint32();
                    break;
                case 19:
                    message.validTime = reader.string();
                    break;
                case 20:
                    message.sortPriority = reader.uint32();
                    break;
                case 21:
                    message.suitNumber = reader.int32();
                    break;
                case 22:
                    message.bagSortPriority = reader.uint32();
                    break;
                case 23:
                    message.status = reader.string();
                    break;
                case 24:
                    message.rank = reader.uint32();
                    break;
                case 25:
                    message.priceDiscount = reader.uint32();
                    break;
                case 26:
                    message.vipDiscount = reader.uint32();
                    break;
                case 27:
                    if (!(message.priceTable && message.priceTable.length))
                        message.priceTable = [];
                    message.priceTable.push($root.proto.GoodsInfo.Price.decode(reader, reader.uint32()));
                    break;
                case 28:
                    if (!(message.goodsAttr && message.goodsAttr.length))
                        message.goodsAttr = [];
                    message.goodsAttr.push($root.proto.GoodsInfo.GoodsAttr.decode(reader, reader.uint32()));
                    break;
                case 29:
                    message.description = reader.string();
                    break;
                case 30:
                    message.limitId = reader.uint32();
                    break;
                case 31:
                    message.subSystemId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GoodsInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.GoodsInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.GoodsInfo} GoodsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GoodsInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GoodsInfo message.
         * @function verify
         * @memberof proto.GoodsInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GoodsInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.goodsId != null && message.hasOwnProperty("goodsId"))
                if (!$util.isInteger(message.goodsId))
                    return "goodsId: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.levelLimit != null && message.hasOwnProperty("levelLimit"))
                if (!$util.isInteger(message.levelLimit))
                    return "levelLimit: integer expected";
            if (message.clubVipLevel != null && message.hasOwnProperty("clubVipLevel"))
                if (!$util.isInteger(message.clubVipLevel))
                    return "clubVipLevel: integer expected";
            if (message.qb_2 != null && message.hasOwnProperty("qb_2"))
                if (!$util.isInteger(message.qb_2))
                    return "qb_2: integer expected";
            if (message.consumeType != null && message.hasOwnProperty("consumeType"))
                if (!$util.isInteger(message.consumeType))
                    return "consumeType: integer expected";
            if (message.timeUnit != null && message.hasOwnProperty("timeUnit"))
                if (!$util.isInteger(message.timeUnit))
                    return "timeUnit: integer expected";
            if (message.isOnline != null && message.hasOwnProperty("isOnline"))
                if (!$util.isInteger(message.isOnline))
                    return "isOnline: integer expected";
            if (message.canBuy != null && message.hasOwnProperty("canBuy"))
                if (!$util.isInteger(message.canBuy))
                    return "canBuy: integer expected";
            if (message.canRecharge != null && message.hasOwnProperty("canRecharge"))
                if (!$util.isInteger(message.canRecharge))
                    return "canRecharge: integer expected";
            if (message.onlineTime != null && message.hasOwnProperty("onlineTime"))
                if (!$util.isString(message.onlineTime))
                    return "onlineTime: string expected";
            if (message.offlineTime != null && message.hasOwnProperty("offlineTime"))
                if (!$util.isString(message.offlineTime))
                    return "offlineTime: string expected";
            if (message.privilegedPlatIdList != null && message.hasOwnProperty("privilegedPlatIdList")) {
                if (!Array.isArray(message.privilegedPlatIdList))
                    return "privilegedPlatIdList: array expected";
                for (var i = 0; i < message.privilegedPlatIdList.length; ++i)
                    if (!$util.isInteger(message.privilegedPlatIdList[i]))
                        return "privilegedPlatIdList: integer[] expected";
            }
            if (message.privilegedPlatIsOnline != null && message.hasOwnProperty("privilegedPlatIsOnline"))
                if (!$util.isInteger(message.privilegedPlatIsOnline))
                    return "privilegedPlatIsOnline: integer expected";
            if (message.privilegedPlatCanBuy != null && message.hasOwnProperty("privilegedPlatCanBuy"))
                if (!$util.isInteger(message.privilegedPlatCanBuy))
                    return "privilegedPlatCanBuy: integer expected";
            if (message.privilegedPlatCanRecharge != null && message.hasOwnProperty("privilegedPlatCanRecharge"))
                if (!$util.isInteger(message.privilegedPlatCanRecharge))
                    return "privilegedPlatCanRecharge: integer expected";
            if (message.paymentTerms != null && message.hasOwnProperty("paymentTerms"))
                if (!$util.isInteger(message.paymentTerms))
                    return "paymentTerms: integer expected";
            if (message.validTime != null && message.hasOwnProperty("validTime"))
                if (!$util.isString(message.validTime))
                    return "validTime: string expected";
            if (message.sortPriority != null && message.hasOwnProperty("sortPriority"))
                if (!$util.isInteger(message.sortPriority))
                    return "sortPriority: integer expected";
            if (message.suitNumber != null && message.hasOwnProperty("suitNumber"))
                if (!$util.isInteger(message.suitNumber))
                    return "suitNumber: integer expected";
            if (message.bagSortPriority != null && message.hasOwnProperty("bagSortPriority"))
                if (!$util.isInteger(message.bagSortPriority))
                    return "bagSortPriority: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.rank != null && message.hasOwnProperty("rank"))
                if (!$util.isInteger(message.rank))
                    return "rank: integer expected";
            if (message.priceDiscount != null && message.hasOwnProperty("priceDiscount"))
                if (!$util.isInteger(message.priceDiscount))
                    return "priceDiscount: integer expected";
            if (message.vipDiscount != null && message.hasOwnProperty("vipDiscount"))
                if (!$util.isInteger(message.vipDiscount))
                    return "vipDiscount: integer expected";
            if (message.priceTable != null && message.hasOwnProperty("priceTable")) {
                if (!Array.isArray(message.priceTable))
                    return "priceTable: array expected";
                for (var i = 0; i < message.priceTable.length; ++i) {
                    var error = $root.proto.GoodsInfo.Price.verify(message.priceTable[i]);
                    if (error)
                        return "priceTable." + error;
                }
            }
            if (message.goodsAttr != null && message.hasOwnProperty("goodsAttr")) {
                if (!Array.isArray(message.goodsAttr))
                    return "goodsAttr: array expected";
                for (var i = 0; i < message.goodsAttr.length; ++i) {
                    var error = $root.proto.GoodsInfo.GoodsAttr.verify(message.goodsAttr[i]);
                    if (error)
                        return "goodsAttr." + error;
                }
            }
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.limitId != null && message.hasOwnProperty("limitId"))
                if (!$util.isInteger(message.limitId))
                    return "limitId: integer expected";
            if (message.subSystemId != null && message.hasOwnProperty("subSystemId"))
                if (!$util.isString(message.subSystemId))
                    return "subSystemId: string expected";
            return null;
        };

        /**
         * Creates a GoodsInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.GoodsInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.GoodsInfo} GoodsInfo
         */
        GoodsInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.GoodsInfo)
                return object;
            var message = new $root.proto.GoodsInfo();
            if (object.goodsId != null)
                message.goodsId = object.goodsId >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.sex != null)
                message.sex = object.sex >>> 0;
            if (object.levelLimit != null)
                message.levelLimit = object.levelLimit >>> 0;
            if (object.clubVipLevel != null)
                message.clubVipLevel = object.clubVipLevel | 0;
            if (object.qb_2 != null)
                message.qb_2 = object.qb_2 | 0;
            if (object.consumeType != null)
                message.consumeType = object.consumeType >>> 0;
            if (object.timeUnit != null)
                message.timeUnit = object.timeUnit >>> 0;
            if (object.isOnline != null)
                message.isOnline = object.isOnline >>> 0;
            if (object.canBuy != null)
                message.canBuy = object.canBuy >>> 0;
            if (object.canRecharge != null)
                message.canRecharge = object.canRecharge >>> 0;
            if (object.onlineTime != null)
                message.onlineTime = String(object.onlineTime);
            if (object.offlineTime != null)
                message.offlineTime = String(object.offlineTime);
            if (object.privilegedPlatIdList) {
                if (!Array.isArray(object.privilegedPlatIdList))
                    throw TypeError(".proto.GoodsInfo.privilegedPlatIdList: array expected");
                message.privilegedPlatIdList = [];
                for (var i = 0; i < object.privilegedPlatIdList.length; ++i)
                    message.privilegedPlatIdList[i] = object.privilegedPlatIdList[i] >>> 0;
            }
            if (object.privilegedPlatIsOnline != null)
                message.privilegedPlatIsOnline = object.privilegedPlatIsOnline >>> 0;
            if (object.privilegedPlatCanBuy != null)
                message.privilegedPlatCanBuy = object.privilegedPlatCanBuy >>> 0;
            if (object.privilegedPlatCanRecharge != null)
                message.privilegedPlatCanRecharge = object.privilegedPlatCanRecharge >>> 0;
            if (object.paymentTerms != null)
                message.paymentTerms = object.paymentTerms >>> 0;
            if (object.validTime != null)
                message.validTime = String(object.validTime);
            if (object.sortPriority != null)
                message.sortPriority = object.sortPriority >>> 0;
            if (object.suitNumber != null)
                message.suitNumber = object.suitNumber | 0;
            if (object.bagSortPriority != null)
                message.bagSortPriority = object.bagSortPriority >>> 0;
            if (object.status != null)
                message.status = String(object.status);
            if (object.rank != null)
                message.rank = object.rank >>> 0;
            if (object.priceDiscount != null)
                message.priceDiscount = object.priceDiscount >>> 0;
            if (object.vipDiscount != null)
                message.vipDiscount = object.vipDiscount >>> 0;
            if (object.priceTable) {
                if (!Array.isArray(object.priceTable))
                    throw TypeError(".proto.GoodsInfo.priceTable: array expected");
                message.priceTable = [];
                for (var i = 0; i < object.priceTable.length; ++i) {
                    if (typeof object.priceTable[i] !== "object")
                        throw TypeError(".proto.GoodsInfo.priceTable: object expected");
                    message.priceTable[i] = $root.proto.GoodsInfo.Price.fromObject(object.priceTable[i]);
                }
            }
            if (object.goodsAttr) {
                if (!Array.isArray(object.goodsAttr))
                    throw TypeError(".proto.GoodsInfo.goodsAttr: array expected");
                message.goodsAttr = [];
                for (var i = 0; i < object.goodsAttr.length; ++i) {
                    if (typeof object.goodsAttr[i] !== "object")
                        throw TypeError(".proto.GoodsInfo.goodsAttr: object expected");
                    message.goodsAttr[i] = $root.proto.GoodsInfo.GoodsAttr.fromObject(object.goodsAttr[i]);
                }
            }
            if (object.description != null)
                message.description = String(object.description);
            if (object.limitId != null)
                message.limitId = object.limitId >>> 0;
            if (object.subSystemId != null)
                message.subSystemId = String(object.subSystemId);
            return message;
        };

        /**
         * Creates a plain object from a GoodsInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.GoodsInfo
         * @static
         * @param {proto.GoodsInfo} message GoodsInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GoodsInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.privilegedPlatIdList = [];
                object.priceTable = [];
                object.goodsAttr = [];
            }
            if (options.defaults) {
                object.goodsId = 0;
                object.name = "";
                object.sex = 0;
                object.levelLimit = 0;
                object.clubVipLevel = 0;
                object.qb_2 = 0;
                object.consumeType = 0;
                object.timeUnit = 0;
                object.isOnline = 0;
                object.canBuy = 0;
                object.canRecharge = 0;
                object.onlineTime = "";
                object.offlineTime = "";
                object.privilegedPlatIsOnline = 0;
                object.privilegedPlatCanBuy = 0;
                object.privilegedPlatCanRecharge = 0;
                object.paymentTerms = 0;
                object.validTime = "";
                object.sortPriority = 0;
                object.suitNumber = 0;
                object.bagSortPriority = 0;
                object.status = "";
                object.rank = 0;
                object.priceDiscount = 0;
                object.vipDiscount = 0;
                object.description = "";
                object.limitId = 0;
                object.subSystemId = "";
            }
            if (message.goodsId != null && message.hasOwnProperty("goodsId"))
                object.goodsId = message.goodsId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.levelLimit != null && message.hasOwnProperty("levelLimit"))
                object.levelLimit = message.levelLimit;
            if (message.clubVipLevel != null && message.hasOwnProperty("clubVipLevel"))
                object.clubVipLevel = message.clubVipLevel;
            if (message.qb_2 != null && message.hasOwnProperty("qb_2"))
                object.qb_2 = message.qb_2;
            if (message.consumeType != null && message.hasOwnProperty("consumeType"))
                object.consumeType = message.consumeType;
            if (message.timeUnit != null && message.hasOwnProperty("timeUnit"))
                object.timeUnit = message.timeUnit;
            if (message.isOnline != null && message.hasOwnProperty("isOnline"))
                object.isOnline = message.isOnline;
            if (message.canBuy != null && message.hasOwnProperty("canBuy"))
                object.canBuy = message.canBuy;
            if (message.canRecharge != null && message.hasOwnProperty("canRecharge"))
                object.canRecharge = message.canRecharge;
            if (message.onlineTime != null && message.hasOwnProperty("onlineTime"))
                object.onlineTime = message.onlineTime;
            if (message.offlineTime != null && message.hasOwnProperty("offlineTime"))
                object.offlineTime = message.offlineTime;
            if (message.privilegedPlatIdList && message.privilegedPlatIdList.length) {
                object.privilegedPlatIdList = [];
                for (var j = 0; j < message.privilegedPlatIdList.length; ++j)
                    object.privilegedPlatIdList[j] = message.privilegedPlatIdList[j];
            }
            if (message.privilegedPlatIsOnline != null && message.hasOwnProperty("privilegedPlatIsOnline"))
                object.privilegedPlatIsOnline = message.privilegedPlatIsOnline;
            if (message.privilegedPlatCanBuy != null && message.hasOwnProperty("privilegedPlatCanBuy"))
                object.privilegedPlatCanBuy = message.privilegedPlatCanBuy;
            if (message.privilegedPlatCanRecharge != null && message.hasOwnProperty("privilegedPlatCanRecharge"))
                object.privilegedPlatCanRecharge = message.privilegedPlatCanRecharge;
            if (message.paymentTerms != null && message.hasOwnProperty("paymentTerms"))
                object.paymentTerms = message.paymentTerms;
            if (message.validTime != null && message.hasOwnProperty("validTime"))
                object.validTime = message.validTime;
            if (message.sortPriority != null && message.hasOwnProperty("sortPriority"))
                object.sortPriority = message.sortPriority;
            if (message.suitNumber != null && message.hasOwnProperty("suitNumber"))
                object.suitNumber = message.suitNumber;
            if (message.bagSortPriority != null && message.hasOwnProperty("bagSortPriority"))
                object.bagSortPriority = message.bagSortPriority;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.rank != null && message.hasOwnProperty("rank"))
                object.rank = message.rank;
            if (message.priceDiscount != null && message.hasOwnProperty("priceDiscount"))
                object.priceDiscount = message.priceDiscount;
            if (message.vipDiscount != null && message.hasOwnProperty("vipDiscount"))
                object.vipDiscount = message.vipDiscount;
            if (message.priceTable && message.priceTable.length) {
                object.priceTable = [];
                for (var j = 0; j < message.priceTable.length; ++j)
                    object.priceTable[j] = $root.proto.GoodsInfo.Price.toObject(message.priceTable[j], options);
            }
            if (message.goodsAttr && message.goodsAttr.length) {
                object.goodsAttr = [];
                for (var j = 0; j < message.goodsAttr.length; ++j)
                    object.goodsAttr[j] = $root.proto.GoodsInfo.GoodsAttr.toObject(message.goodsAttr[j], options);
            }
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.limitId != null && message.hasOwnProperty("limitId"))
                object.limitId = message.limitId;
            if (message.subSystemId != null && message.hasOwnProperty("subSystemId"))
                object.subSystemId = message.subSystemId;
            return object;
        };

        /**
         * Converts this GoodsInfo to JSON.
         * @function toJSON
         * @memberof proto.GoodsInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GoodsInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        GoodsInfo.Price = (function() {

            /**
             * Properties of a Price.
             * @memberof proto.GoodsInfo
             * @interface IPrice
             * @property {number|null} [priceDq] 点券价格
             * @property {number|null} [priceGold] 金币价格
             * @property {number|null} [priceValue] 天数或数量
             */

            /**
             * Constructs a new Price.
             * @memberof proto.GoodsInfo
             * @classdesc Represents a Price.
             * @implements IPrice
             * @constructor
             * @param {proto.GoodsInfo.IPrice=} [properties] Properties to set
             */
            function Price(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * 点券价格
             * @member {number} priceDq
             * @memberof proto.GoodsInfo.Price
             * @instance
             */
            Price.prototype.priceDq = 0;

            /**
             * 金币价格
             * @member {number} priceGold
             * @memberof proto.GoodsInfo.Price
             * @instance
             */
            Price.prototype.priceGold = 0;

            /**
             * 天数或数量
             * @member {number} priceValue
             * @memberof proto.GoodsInfo.Price
             * @instance
             */
            Price.prototype.priceValue = 0;

            /**
             * Creates a new Price instance using the specified properties.
             * @function create
             * @memberof proto.GoodsInfo.Price
             * @static
             * @param {proto.GoodsInfo.IPrice=} [properties] Properties to set
             * @returns {proto.GoodsInfo.Price} Price instance
             */
            Price.create = function create(properties) {
                return new Price(properties);
            };

            /**
             * Encodes the specified Price message. Does not implicitly {@link proto.GoodsInfo.Price.verify|verify} messages.
             * @function encode
             * @memberof proto.GoodsInfo.Price
             * @static
             * @param {proto.GoodsInfo.IPrice} message Price message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Price.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.priceDq != null && message.hasOwnProperty("priceDq"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.priceDq);
                if (message.priceGold != null && message.hasOwnProperty("priceGold"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.priceGold);
                if (message.priceValue != null && message.hasOwnProperty("priceValue"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.priceValue);
                return writer;
            };

            /**
             * Encodes the specified Price message, length delimited. Does not implicitly {@link proto.GoodsInfo.Price.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.GoodsInfo.Price
             * @static
             * @param {proto.GoodsInfo.IPrice} message Price message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Price.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Price message from the specified reader or buffer.
             * @function decode
             * @memberof proto.GoodsInfo.Price
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.GoodsInfo.Price} Price
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Price.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.GoodsInfo.Price();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.priceDq = reader.uint32();
                        break;
                    case 2:
                        message.priceGold = reader.uint32();
                        break;
                    case 3:
                        message.priceValue = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Price message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.GoodsInfo.Price
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.GoodsInfo.Price} Price
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Price.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Price message.
             * @function verify
             * @memberof proto.GoodsInfo.Price
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Price.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.priceDq != null && message.hasOwnProperty("priceDq"))
                    if (!$util.isInteger(message.priceDq))
                        return "priceDq: integer expected";
                if (message.priceGold != null && message.hasOwnProperty("priceGold"))
                    if (!$util.isInteger(message.priceGold))
                        return "priceGold: integer expected";
                if (message.priceValue != null && message.hasOwnProperty("priceValue"))
                    if (!$util.isInteger(message.priceValue))
                        return "priceValue: integer expected";
                return null;
            };

            /**
             * Creates a Price message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.GoodsInfo.Price
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.GoodsInfo.Price} Price
             */
            Price.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.GoodsInfo.Price)
                    return object;
                var message = new $root.proto.GoodsInfo.Price();
                if (object.priceDq != null)
                    message.priceDq = object.priceDq >>> 0;
                if (object.priceGold != null)
                    message.priceGold = object.priceGold >>> 0;
                if (object.priceValue != null)
                    message.priceValue = object.priceValue >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a Price message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.GoodsInfo.Price
             * @static
             * @param {proto.GoodsInfo.Price} message Price
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Price.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.priceDq = 0;
                    object.priceGold = 0;
                    object.priceValue = 0;
                }
                if (message.priceDq != null && message.hasOwnProperty("priceDq"))
                    object.priceDq = message.priceDq;
                if (message.priceGold != null && message.hasOwnProperty("priceGold"))
                    object.priceGold = message.priceGold;
                if (message.priceValue != null && message.hasOwnProperty("priceValue"))
                    object.priceValue = message.priceValue;
                return object;
            };

            /**
             * Converts this Price to JSON.
             * @function toJSON
             * @memberof proto.GoodsInfo.Price
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Price.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Price;
        })();

        GoodsInfo.GoodsAttr = (function() {

            /**
             * Properties of a GoodsAttr.
             * @memberof proto.GoodsInfo
             * @interface IGoodsAttr
             * @property {number|null} [attrType] 属性类型
             * 1 HP
             * 2 体力
             * 3 怒气
             * 4 攻击力
             * 5 暴击
             * @property {number|null} [attrValue] 属性值
             * (HP
             * 头发：150
             * 上身：150
             * 下身：100
             * 表情：50
             * )
             */

            /**
             * Constructs a new GoodsAttr.
             * @memberof proto.GoodsInfo
             * @classdesc Represents a GoodsAttr.
             * @implements IGoodsAttr
             * @constructor
             * @param {proto.GoodsInfo.IGoodsAttr=} [properties] Properties to set
             */
            function GoodsAttr(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * 属性类型
             * 1 HP
             * 2 体力
             * 3 怒气
             * 4 攻击力
             * 5 暴击
             * @member {number} attrType
             * @memberof proto.GoodsInfo.GoodsAttr
             * @instance
             */
            GoodsAttr.prototype.attrType = 0;

            /**
             * 属性值
             * (HP
             * 头发：150
             * 上身：150
             * 下身：100
             * 表情：50
             * )
             * @member {number} attrValue
             * @memberof proto.GoodsInfo.GoodsAttr
             * @instance
             */
            GoodsAttr.prototype.attrValue = 0;

            /**
             * Creates a new GoodsAttr instance using the specified properties.
             * @function create
             * @memberof proto.GoodsInfo.GoodsAttr
             * @static
             * @param {proto.GoodsInfo.IGoodsAttr=} [properties] Properties to set
             * @returns {proto.GoodsInfo.GoodsAttr} GoodsAttr instance
             */
            GoodsAttr.create = function create(properties) {
                return new GoodsAttr(properties);
            };

            /**
             * Encodes the specified GoodsAttr message. Does not implicitly {@link proto.GoodsInfo.GoodsAttr.verify|verify} messages.
             * @function encode
             * @memberof proto.GoodsInfo.GoodsAttr
             * @static
             * @param {proto.GoodsInfo.IGoodsAttr} message GoodsAttr message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GoodsAttr.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.attrType != null && message.hasOwnProperty("attrType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.attrType);
                if (message.attrValue != null && message.hasOwnProperty("attrValue"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.attrValue);
                return writer;
            };

            /**
             * Encodes the specified GoodsAttr message, length delimited. Does not implicitly {@link proto.GoodsInfo.GoodsAttr.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.GoodsInfo.GoodsAttr
             * @static
             * @param {proto.GoodsInfo.IGoodsAttr} message GoodsAttr message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GoodsAttr.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GoodsAttr message from the specified reader or buffer.
             * @function decode
             * @memberof proto.GoodsInfo.GoodsAttr
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.GoodsInfo.GoodsAttr} GoodsAttr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GoodsAttr.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.GoodsInfo.GoodsAttr();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.attrType = reader.uint32();
                        break;
                    case 2:
                        message.attrValue = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GoodsAttr message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.GoodsInfo.GoodsAttr
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.GoodsInfo.GoodsAttr} GoodsAttr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GoodsAttr.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GoodsAttr message.
             * @function verify
             * @memberof proto.GoodsInfo.GoodsAttr
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GoodsAttr.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.attrType != null && message.hasOwnProperty("attrType"))
                    if (!$util.isInteger(message.attrType))
                        return "attrType: integer expected";
                if (message.attrValue != null && message.hasOwnProperty("attrValue"))
                    if (!$util.isInteger(message.attrValue))
                        return "attrValue: integer expected";
                return null;
            };

            /**
             * Creates a GoodsAttr message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.GoodsInfo.GoodsAttr
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.GoodsInfo.GoodsAttr} GoodsAttr
             */
            GoodsAttr.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.GoodsInfo.GoodsAttr)
                    return object;
                var message = new $root.proto.GoodsInfo.GoodsAttr();
                if (object.attrType != null)
                    message.attrType = object.attrType >>> 0;
                if (object.attrValue != null)
                    message.attrValue = object.attrValue >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a GoodsAttr message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.GoodsInfo.GoodsAttr
             * @static
             * @param {proto.GoodsInfo.GoodsAttr} message GoodsAttr
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GoodsAttr.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.attrType = 0;
                    object.attrValue = 0;
                }
                if (message.attrType != null && message.hasOwnProperty("attrType"))
                    object.attrType = message.attrType;
                if (message.attrValue != null && message.hasOwnProperty("attrValue"))
                    object.attrValue = message.attrValue;
                return object;
            };

            /**
             * Converts this GoodsAttr to JSON.
             * @function toJSON
             * @memberof proto.GoodsInfo.GoodsAttr
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GoodsAttr.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return GoodsAttr;
        })();

        return GoodsInfo;
    })();

    proto.GoodsInfoMap = (function() {

        /**
         * Properties of a GoodsInfoMap.
         * @memberof proto
         * @interface IGoodsInfoMap
         * @property {Object.<string,proto.IGoodsInfo>|null} [items] GoodsInfoMap items
         */

        /**
         * Constructs a new GoodsInfoMap.
         * @memberof proto
         * @classdesc Represents a GoodsInfoMap.
         * @implements IGoodsInfoMap
         * @constructor
         * @param {proto.IGoodsInfoMap=} [properties] Properties to set
         */
        function GoodsInfoMap(properties) {
            this.items = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GoodsInfoMap items.
         * @member {Object.<string,proto.IGoodsInfo>} items
         * @memberof proto.GoodsInfoMap
         * @instance
         */
        GoodsInfoMap.prototype.items = $util.emptyObject;

        /**
         * Creates a new GoodsInfoMap instance using the specified properties.
         * @function create
         * @memberof proto.GoodsInfoMap
         * @static
         * @param {proto.IGoodsInfoMap=} [properties] Properties to set
         * @returns {proto.GoodsInfoMap} GoodsInfoMap instance
         */
        GoodsInfoMap.create = function create(properties) {
            return new GoodsInfoMap(properties);
        };

        /**
         * Encodes the specified GoodsInfoMap message. Does not implicitly {@link proto.GoodsInfoMap.verify|verify} messages.
         * @function encode
         * @memberof proto.GoodsInfoMap
         * @static
         * @param {proto.IGoodsInfoMap} message GoodsInfoMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GoodsInfoMap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.hasOwnProperty("items"))
                for (var keys = Object.keys(message.items), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.proto.GoodsInfo.encode(message.items[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified GoodsInfoMap message, length delimited. Does not implicitly {@link proto.GoodsInfoMap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.GoodsInfoMap
         * @static
         * @param {proto.IGoodsInfoMap} message GoodsInfoMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GoodsInfoMap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GoodsInfoMap message from the specified reader or buffer.
         * @function decode
         * @memberof proto.GoodsInfoMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.GoodsInfoMap} GoodsInfoMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GoodsInfoMap.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.GoodsInfoMap(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.items === $util.emptyObject)
                        message.items = {};
                    key = reader.uint32();
                    reader.pos++;
                    message.items[key] = $root.proto.GoodsInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GoodsInfoMap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.GoodsInfoMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.GoodsInfoMap} GoodsInfoMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GoodsInfoMap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GoodsInfoMap message.
         * @function verify
         * @memberof proto.GoodsInfoMap
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GoodsInfoMap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!$util.isObject(message.items))
                    return "items: object expected";
                var key = Object.keys(message.items);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "items: integer key{k:uint32} expected";
                    {
                        var error = $root.proto.GoodsInfo.verify(message.items[key[i]]);
                        if (error)
                            return "items." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a GoodsInfoMap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.GoodsInfoMap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.GoodsInfoMap} GoodsInfoMap
         */
        GoodsInfoMap.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.GoodsInfoMap)
                return object;
            var message = new $root.proto.GoodsInfoMap();
            if (object.items) {
                if (typeof object.items !== "object")
                    throw TypeError(".proto.GoodsInfoMap.items: object expected");
                message.items = {};
                for (var keys = Object.keys(object.items), i = 0; i < keys.length; ++i) {
                    if (typeof object.items[keys[i]] !== "object")
                        throw TypeError(".proto.GoodsInfoMap.items: object expected");
                    message.items[keys[i]] = $root.proto.GoodsInfo.fromObject(object.items[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GoodsInfoMap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.GoodsInfoMap
         * @static
         * @param {proto.GoodsInfoMap} message GoodsInfoMap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GoodsInfoMap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.items = {};
            var keys2;
            if (message.items && (keys2 = Object.keys(message.items)).length) {
                object.items = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.items[keys2[j]] = $root.proto.GoodsInfo.toObject(message.items[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this GoodsInfoMap to JSON.
         * @function toJSON
         * @memberof proto.GoodsInfoMap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GoodsInfoMap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GoodsInfoMap;
    })();

    proto.Person = (function() {

        /**
         * Properties of a Person.
         * @memberof proto
         * @interface IPerson
         * @property {number|null} [id] 唯一标识
         * @property {string|null} [username] 姓名
         */

        /**
         * Constructs a new Person.
         * @memberof proto
         * @classdesc Represents a Person.
         * @implements IPerson
         * @constructor
         * @param {proto.IPerson=} [properties] Properties to set
         */
        function Person(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * 唯一标识
         * @member {number} id
         * @memberof proto.Person
         * @instance
         */
        Person.prototype.id = 0;

        /**
         * 姓名
         * @member {string} username
         * @memberof proto.Person
         * @instance
         */
        Person.prototype.username = "";

        /**
         * Creates a new Person instance using the specified properties.
         * @function create
         * @memberof proto.Person
         * @static
         * @param {proto.IPerson=} [properties] Properties to set
         * @returns {proto.Person} Person instance
         */
        Person.create = function create(properties) {
            return new Person(properties);
        };

        /**
         * Encodes the specified Person message. Does not implicitly {@link proto.Person.verify|verify} messages.
         * @function encode
         * @memberof proto.Person
         * @static
         * @param {proto.IPerson} message Person message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Person.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified Person message, length delimited. Does not implicitly {@link proto.Person.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Person
         * @static
         * @param {proto.IPerson} message Person message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Person.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Person message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Person
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Person} Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Person.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Person();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Person message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Person
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Person} Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Person.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Person message.
         * @function verify
         * @memberof proto.Person
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Person.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            return null;
        };

        /**
         * Creates a Person message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Person
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Person} Person
         */
        Person.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Person)
                return object;
            var message = new $root.proto.Person();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a Person message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Person
         * @static
         * @param {proto.Person} message Person
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Person.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.username = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        /**
         * Converts this Person to JSON.
         * @function toJSON
         * @memberof proto.Person
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Person.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Person;
    })();

    proto.PersonMap = (function() {

        /**
         * Properties of a PersonMap.
         * @memberof proto
         * @interface IPersonMap
         * @property {Object.<string,proto.IPerson>|null} [items] PersonMap items
         */

        /**
         * Constructs a new PersonMap.
         * @memberof proto
         * @classdesc Represents a PersonMap.
         * @implements IPersonMap
         * @constructor
         * @param {proto.IPersonMap=} [properties] Properties to set
         */
        function PersonMap(properties) {
            this.items = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PersonMap items.
         * @member {Object.<string,proto.IPerson>} items
         * @memberof proto.PersonMap
         * @instance
         */
        PersonMap.prototype.items = $util.emptyObject;

        /**
         * Creates a new PersonMap instance using the specified properties.
         * @function create
         * @memberof proto.PersonMap
         * @static
         * @param {proto.IPersonMap=} [properties] Properties to set
         * @returns {proto.PersonMap} PersonMap instance
         */
        PersonMap.create = function create(properties) {
            return new PersonMap(properties);
        };

        /**
         * Encodes the specified PersonMap message. Does not implicitly {@link proto.PersonMap.verify|verify} messages.
         * @function encode
         * @memberof proto.PersonMap
         * @static
         * @param {proto.IPersonMap} message PersonMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PersonMap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.items != null && message.hasOwnProperty("items"))
                for (var keys = Object.keys(message.items), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.proto.Person.encode(message.items[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified PersonMap message, length delimited. Does not implicitly {@link proto.PersonMap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.PersonMap
         * @static
         * @param {proto.IPersonMap} message PersonMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PersonMap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PersonMap message from the specified reader or buffer.
         * @function decode
         * @memberof proto.PersonMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.PersonMap} PersonMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PersonMap.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PersonMap(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.items === $util.emptyObject)
                        message.items = {};
                    key = reader.uint32();
                    reader.pos++;
                    message.items[key] = $root.proto.Person.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PersonMap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.PersonMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.PersonMap} PersonMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PersonMap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PersonMap message.
         * @function verify
         * @memberof proto.PersonMap
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PersonMap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.items != null && message.hasOwnProperty("items")) {
                if (!$util.isObject(message.items))
                    return "items: object expected";
                var key = Object.keys(message.items);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "items: integer key{k:uint32} expected";
                    {
                        var error = $root.proto.Person.verify(message.items[key[i]]);
                        if (error)
                            return "items." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a PersonMap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.PersonMap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.PersonMap} PersonMap
         */
        PersonMap.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.PersonMap)
                return object;
            var message = new $root.proto.PersonMap();
            if (object.items) {
                if (typeof object.items !== "object")
                    throw TypeError(".proto.PersonMap.items: object expected");
                message.items = {};
                for (var keys = Object.keys(object.items), i = 0; i < keys.length; ++i) {
                    if (typeof object.items[keys[i]] !== "object")
                        throw TypeError(".proto.PersonMap.items: object expected");
                    message.items[keys[i]] = $root.proto.Person.fromObject(object.items[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PersonMap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.PersonMap
         * @static
         * @param {proto.PersonMap} message PersonMap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PersonMap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.items = {};
            var keys2;
            if (message.items && (keys2 = Object.keys(message.items)).length) {
                object.items = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.items[keys2[j]] = $root.proto.Person.toObject(message.items[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this PersonMap to JSON.
         * @function toJSON
         * @memberof proto.PersonMap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PersonMap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PersonMap;
    })();

    return proto;
})();

module.exports = $root;
