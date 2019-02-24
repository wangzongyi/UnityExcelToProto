@SET ProjectFolder=D:\UnityProjects\CasualGame
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

@SET CSC6="C:\Program Files (x86)\MSBuild\14.0\Bin\csc.exe"

@CALL python xls_deploy_tool.py xls/person.xls

@%CSC6% /out:client-proto.dll /t:library /r:Google.Protobuf.dll /debug- /optimize+ csharp\*.cs

@ECHO 复制文件至工程目录

@XCOPY client-proto.dll %LibsFolder%\ /Y
@FOR %%P IN (protodata\*) DO @XCOPY %%P %ProtoFolder%\ /Y
	
@pause