//BACKUP JOB (#ACCT),'BACKUP LIB',MSGCLASS=A,CLASS=A,
//      MSGLEVEL=(1,1),REGION=0M,NOTIFY=&SYSUID.,SYSAFF=*
//* ********************************************************************
//* * BACKUP LIB BEFORE UPLOAD NEW JOBS 
//* ********************************************************************
//* *  
//COPY  EXEC PGM=IEBCOPY
//SYSPRINT DD SYSOUT=*
//SYSUT1  DD DISP=SHR,DSN=A028356.CICD.LIB
//SYSUT2  DD DSN=A028356.CICD.LIB.BKP,
//       DISP=(MOD,KEEP,DELETE),SPACE=(TRK,(5,1,2))
