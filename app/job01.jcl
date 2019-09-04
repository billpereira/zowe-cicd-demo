//JOB01JCL JOB (#ACCT),'COMP AND LNK',MSGCLASS=A,CLASS=
//      MSGLEVEL=(1,1),REGION=0M,NOTIFY=&SYSUID.,SYSAFF=*
//* ********************************************************************
//* * SAMPLE JOB TO COMPILE AND LINKEDIT OUR HELLO WORLD 
//* ********************************************************************
//* *  
//MYLIBS1  JCLLIB  ORDER=SYS1.ADCOB.SIGYPROC
//COMLNK  EXEC  IGYWCL
//COBOL.SYSIN DD DISP=SHR,
//     DSN=LBI9.CICD.HELLO.CBL
//LKED.SYSLMOD DD DISP=OLD,
//     DSN=LBI9.CICD.LOAD(HELLOWRD)
/*