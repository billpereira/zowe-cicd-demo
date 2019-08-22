curl “https://ibmpb3.service-now.com/api/x_ibmg5_devops_cic/v1/cdci” \
--request POST \
--header “Accept:application/json” \
--header “Content-Type:application/json” \
--data “{\“assignment_group\“:\“Software\“,\“assigned_to\“:\“Thiago Gomes Muntoreanu\“,\“crq_status\“:\“\”,\“request_status\“:\“\”,\“request_summary\“:\“CDCI new JCL and Cobol\“}” \
--user ‘admin’:‘admin’