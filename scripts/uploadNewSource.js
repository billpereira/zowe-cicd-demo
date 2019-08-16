const { execSync } = require('child_process');

console.log(execSync(`zowe jobs submit lf "scripts/iebcopy.jcl" -d output`).toString())
console.log(execSync(`zowe files ul ftds "app/job01.jcl" "A028356.CICD.LIB(JOB01JCL)"`).toString())
console.log(execSync(`zowe files ul ftds "app/job02.jcl" "A028356.CICD.LIB(JOB02JCL)"`).toString())
console.log(execSync(`zowe files ul ftds "app/hello.cbl" "A028356.CICD.HELLO.CBL"`).toString())