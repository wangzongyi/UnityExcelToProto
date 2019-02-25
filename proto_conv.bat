@SET ProjectFolder=F:\CasualFrame
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

@SET CSC6="C:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe"
@IF NOT EXIST %CSC6% (
@ECHO �Ҳ���csc.ext·��������
@PAUSE
@EXIT
)

@CALL python xls_deploy_tool.py xls/goods_info.xls

@%CSC6% /out:client-proto.dll /t:library /r:Google.Protobuf.dll /debug- /optimize+ csharp\*.cs

@ECHO �����ļ�������Ŀ¼

@XCOPY client-proto.dll %LibsFolder%\ /Y
@FOR %%P IN (protodata\*) DO @XCOPY %%P %ProtoFolder%\ /Y
	
@pause