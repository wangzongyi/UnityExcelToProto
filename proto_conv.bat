@SET ProjectFolder=D:\UnityProjects\CasualGame
@SET LibsFolder=%ProjectFolder%\Assets\Casual\Libs
@SET ProtoFolder=%ProjectFolder%\Assets\Casual\Resources\ClientProto

@ECHO ����Ŀ¼:%ProjectFolder%
@ECHO ��Ŀ¼:%LibsFolder%
@ECHO ����Ŀ¼:%ProtoFolder%

@IF NOT EXIST %ProjectFolder% (
@ECHO δ���ù���Ŀ¼
@PAUSE
@EXIT
)

@SET CSC6="C:\Program Files (x86)\MSBuild\14.0\Bin\csc.exe"

@CALL python xls_deploy_tool.py xls/person.xls

@%CSC6% /out:client-proto.dll /t:library /r:Google.Protobuf.dll /debug- /optimize+ csharp\*.cs

@ECHO �����ļ�������Ŀ¼

@XCOPY client-proto.dll %LibsFolder%\ /Y
@FOR %%P IN (protodata\*) DO @XCOPY %%P %ProtoFolder%\ /Y
	
@pause