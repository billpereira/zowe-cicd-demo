var requestBody = “{\“assignment_group\“:\“CICD Automation\“,\“assigned_to\“:\“CICD\“,\“crq_status\“:\“\”,\“request_status\“:\“\”,\“request_summary\“:\“TEST\“}”;
var client=new XMLHttpRequest();
client.open(“post”,“https://ibmpb3.service-now.com/api/x_ibmg5_devops_cic/v1/cdci“);
client.setRequestHeader(‘Accept’,‘application/json’);
client.setRequestHeader(‘Content-Type’,‘application/json’);
//Eg. UserName=“admin”, Password=“admin” for this code sample.
client.setRequestHeader(‘Authorization’, ‘Basic ’+btoa(‘admin’+‘:’+‘admin’));
client.onreadystatechange = function() {
    if(this.readyState == this.DONE) {
        document.getElementById(“response”).innerHTML=this.status + this.response;
    }
};
client.send(requestBody);