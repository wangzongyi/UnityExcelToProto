@SET ProjectFolder=D:\UnityProjects\CasualGame
@ECHO 工作目录:%ProjectFolder%
@SET LibsFolder=%ProjectFolder%\Assets\Casual\Libs
@SET ProtoFolder=%ProjectFolder%\Assets\Casual\Resources\ClientProto

@IF NOT EXIST %ProjectFolder% (
@ECHO 未设置工作目录
@PAUSE
@EXIT
)

@SET CSC20=c:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe

call python xls_deploy_tool.py xls/person.xls

@%CSC20% /out:client-proto.dll /t:library /r:Google.Protobuf.dll /debug- /optimize+ csharp\*.cs

@ECHO 即将复制文件至工作目录
@PAUSE

@xcopy lient-proto.dll %LibsFolder%\ /Y /Q
@FOR %%P IN (protodata\*) DO xcopy %%P %ProtoFolder%\ /Y /Q
	
@pause