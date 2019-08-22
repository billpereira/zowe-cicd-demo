const axios = require('axios');

const data = {
  assignment_group:'CobolDevs',
  assigned_to:'Cidi',
  crq_status:' ',
  request_status:' ',
  request_summary:'Updating CICD Cobol with Travis'
} 

const config = {
  headers:{'Accept':'application/json','Content-Type':'application/json'},
  auth:{
    username:'admin',
    password:'admin'
  }
}

axios.post('https://ibmpb3.service-now.com/api/x_ibmg5_devops_cic/v1/cdci',data,config)