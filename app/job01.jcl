//COMLNK JOB (#ACCT),'COMP AND LNK',MSGCLASS=A,CLASS=A,
//      MSGLEVEL=(1,1),REGION=0M,NOTIFY=&SYSUID.,SYSAFF=*
//* ********************************************************************
//* * SAMPLE JOB TO COMPILE AND LINKEDIT OUR HELLO WORLD 
//* ********************************************************************
//* *  
//MYLIBS1  JCLLIB  ORDER=SYS1.ADCOB.SIGYPROC
//COMLNK  EXEC  IGYWCL
//COBOL.SYSIN DD DISP=SHR,
//     DSN=A028356.TECHU.HELLO.CBL
//LKED.SYSLMOD DD DISP=OLD,
//     DSN=A028356.TECHU.HELLO.LOAD(HELLOWRD)
/*