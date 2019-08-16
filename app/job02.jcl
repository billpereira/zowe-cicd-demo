//RUNCBL JOB (#ACCT),'EXEC CBL',MSGCLASS=A,CLASS=A,
//      MSGLEVEL=(1,1),REGION=0M,NOTIFY=&SYSUID.,SYSAFF=*
//* ********************************************************************
//* * RUN THE COMPILED PROGRAM
//* ********************************************************************
//* *  
//RUNCBL  EXEC  PGM=HELLOWRD
//STEPLIB DD DISP=OLD,DSN=A028356.TECHU.HELLO.LOAD