const { execSync } = require('child_process');

console.log(execSync(`zowe jobs submit lf "scripts/iebcopy.jcl" -d output`).toString())
console.log(execSync(`zowe files ul ftds "app/job01.jcl" "LBI9.CICD.LIB(JOB01JCL)"`).toString())
console.log(execSync(`zowe files ul ftds "app/job02.jcl" "LBI9.CICD.LIB(JOB02JCL)"`).toString())
console.log(execSync(`zowe files ul ftds "app/hello.cbl" "LBI9.CICD.HELLO.CBL"`).toString())
console.log(execSync(`zowe files ul ftds "app/input.txt" "LBI9.CICD.INPUT"`).toString())