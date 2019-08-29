//JOB02JCL JOB (#ACCT),'EXEC CBL',MSGCLASS=A,CLASS=B,
//      MSGLEVEL=(1,1),REGION=0M,NOTIFY=&SYSUID.,SYSAFF=*
//* ********************************************************************
//* * RUN THE COMPILED PROGRAM
//* ********************************************************************
//* *  
//RUNCBL  EXEC  PGM=HELLOWRD
//STEPLIB DD DISP=OLD,DSN=LBI9.CICD.LOAD