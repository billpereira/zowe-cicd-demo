const {execSync} = require('child_process');

// const submitJob = 

  test('Compile JCL should run with RC 0',()=>{
    let cmd = `zowe jobs submit lf "test.job01.jcl" --directory "./output" --rfj`
    buildResponse = JSON.parse(execSync(cmd).toString());
    console.log('Your job submission for validation is: ',buildResponse.data.jobid)
    expect(buildResponse.data.retcode).toBe('CC 0000')
  })
  
  test('Run complied program with RC 0',()=>{
    let cmd = `zowe jobs submit lf "test.job02.jcl" --directory "./output" --rfj`
    buildResponse = JSON.parse(execSync(cmd).toString());
    console.log('Your job submission for validation is: ',buildResponse.data.jobid)
    expect(buildResponse.data.retcode).toBe('CC 0000')
  })


