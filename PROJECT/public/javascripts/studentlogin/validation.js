function passwordvisible() 
{
    var obj = document.getElementById("pass");
    if (obj.type === "password") 
    {
        obj.type = "text";
    } 
    else 
    {
        obj.type = "password";
    }
}


function emailcheck(){
    var emailexp=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email=document.getElementById("email").value;
    
    if(email===null||email===""){
        document.getElementById("email").style.backgroundColor='Red';
        document.getElementById("emailmsg").innerHTML="Please Enter an Email Address";
    }
    else if(!emailexp.test(email)){
        document.getElementById("email").style.baxkgroundColor='Red';
        document.getElementById("emailmsg").innerHTML="INVALID EMAIL ADDRESS!";
        document.getElementById("email").value="";
    }
    
}

function msgclear(){
    document.getElementById("email").style.backgroundColor='White';
    document.getElementById("emailmsg").innerHTML="";
}

function pwdcheck(){
    var pwdexp=/^[a-zA-Z0-9]{4,8}$/;
    var password=document.getElementById("pass").value;
    

    if(password===null||password===""){
        document.getElementById("pass").style.backgroundColor='Red';
        document.getElementById("pwdmsg").innerHTML="Please Enter the Password";
    }
    /*else if(!pwdexp.test(password)){
        document.getElementById("pass").style.backgroundColor='Red';
        document.getElementById("pwdmsg").innerHTML="INVALID PASSWORD!";
        document.getElementById("pass").value="";
        return;
    }*/
    
}

function pwdclear(){
    document.getElementById("pass").style.backgroundColor='White';
    document.getElementById("pwdmsg").innerHTML="";
}