
function validate(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confrim = document.getElementById("confrim").value;
    var result = document.getElementById("result");

    result.setAttribute("class","alert alert-danger text-center")



    if(user=="" && email=="" && password=="" && confrim ==""){
        result.innerHTML ="Enter Data in form";
        return false;
    }else if(user.length<5 || user.length>15){
        result.innerHTML ="Enter 5-15 Character in username";
        return false;
    }else if(email.indexOf("@")==-1 || email.indexOf(".com")==-1){
        result.innerHTML ="Enter vaild Email";
        return false;
    }else if(password.length==""){
        result.innerHTML ="Enter password";
        return false;
    }else if(password.length<8){
        result.innerHTML ="weak password";
        return false;
    }else if(password!= confrim){
        result.innerHTML ="not matched password";
        return false;
    }
}

