@SET ProjectFolder=%cd%\..
@SET LibsFolder=%ProjectFolder%\Assets\Casual\Libs
@SET ProtoFolder=%ProjectFolder%\Assets\Casual\Resources\ClientProto

@ECHO ��ĿĿ¼:%ProjectFolder%
@ECHO ��Ŀ¼:%LibsFolder%
@ECHO ����Ŀ¼:%ProtoFolder%

@IF NOT EXIST %ProjectFolder% (
@ECHO δ������ĿĿ¼
@PAUSE
@EXIT
)

@SET CSC6="C:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe"
@IF NOT EXIST %CSC6% (
@ECHO �Ҳ���csc.ext·��������
@PAUSE
@EXIT
)

@ECHO ��ʼ����xlsĿ¼�µ������ļ�
@FOR %%P IN (xls\*) DO @CALL python xls_deploy_tool.py %%P

@%CSC6% /out:client-proto.dll /t:library /r:Google.Protobuf.dll /debug- /optimize+ csharp\*.cs

@ECHO ���������ļ�����ĿĿ¼

@XCOPY client-proto.dll %LibsFolder%\ /Y
@FOR %%P IN (protodata\*) DO @XCOPY %%P %ProtoFolder%\ /Y
@pause