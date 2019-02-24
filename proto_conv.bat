@SET ProjectFolder=D:\UnityProjects\CasualGame
@ECHO ����Ŀ¼:%ProjectFolder%
@SET LibsFolder=%ProjectFolder%\Assets\Casual\Libs
@SET ProtoFolder=%ProjectFolder%\Assets\Casual\Resources\ClientProto

@IF NOT EXIST %ProjectFolder% (
@ECHO δ���ù���Ŀ¼
@PAUSE
@EXIT
)

@SET CSC20=c:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe

call python xls_deploy_tool.py xls/person.xls

@%CSC20% /out:client-proto.dll /t:library /r:Google.Protobuf.dll /debug- /optimize+ csharp\*.cs

@ECHO ���������ļ�������Ŀ¼
@PAUSE

@xcopy lient-proto.dll %LibsFolder%\ /Y /Q
@FOR %%P IN (protodata\*) DO xcopy %%P %ProtoFolder%\ /Y /Q
	
@pause