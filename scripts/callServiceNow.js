const https = require('https');
let headers = { 
  "Content-Type": "application/json",
  "Accept": "application/json"
 }

let data = `{
    "assignment_group":“Software“,
    "assigned_to":“Thiago Gomes Muntoreanu“,
    "crq_status":“ ”,
    "request_status":“ ”,
    "request_summary":“CDCI new JCL and Cobol"
}`

let options = {
  host: 'https://ibmpb3.service-now.com',
  path: '/api/x_ibmg5_devops_cic/v1/cdci',
  port: 443,
  method:'POST',
  headers,
  auth: 'admin:admin',
  body:{
    data
  }
}

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', (d) => {
    process.stdout.write(d)
  })
})

req.on('error', (error) => {
  console.error(error)
})

req.write(data)
req.end()