@SET ProjectFolder=F:\CasualFrame
@SET LibsFolder=%ProjectFolder%\Assets\Casual\Libs
@SET ProtoFolder=%ProjectFolder%\Assets\Casual\Resources\ClientProto

@ECHO 工程目录:%ProjectFolder%
@ECHO 库目录:%LibsFolder%
@ECHO 配置目录:%ProtoFolder%

@IF NOT EXIST %ProjectFolder% (
@ECHO 未设置工作目录
@PAUSE
@EXIT
)

@SET CSC6="C:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe"
@IF NOT EXIST %CSC6% (
@ECHO 找不到csc.ext路径，请检查
@PAUSE
@EXIT
)

@CALL python xls_deploy_tool.py xls/goods_info.xls

@%CSC6% /out:client-proto.dll /t:library /r:Google.Protobuf.dll /debug- /optimize+ csharp\*.cs

@ECHO 复制文件至工程目录

@XCOPY client-proto.dll %LibsFolder%\ /Y
@FOR %%P IN (protodata\*) DO @XCOPY %%P %ProtoFolder%\ /Y
	
@pause