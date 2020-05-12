function checkfname()
{
   var nameexp = /^[a-zA-Z ]{3,10}$/;

   var name = document.getElementById("firstname").value;
  // alert(name);

   var nameflag = false;

   if(nameexp.test(name))
   {
	   nameflag = true;
   }
   else
   {
	   document.getElementById('fnameerrormsg').style.visibility = 'visible';
       document.getElementById('fnameerrormsg').innerText = "Enter Valid First Name";
       //document.getElementById("firstname").style.borderColor = 'Red';
       document.getElementById("firstname").value="";
   }
}

function clearfname()
{
	document.getElementById("firstname").style.background = 'White';
	document.getElementById('fnameerrormsg').style.visibility = 'hidden';

}
function checklname()
{
   var nameexp = /^[a-zA-Z ]{3,10}$/;

   var name = document.getElementById("lastname").value;
  // alert(name);

   var nameflag = false;

   if(nameexp.test(name))
   {
	   nameflag = true;
   }
   else
   {
	   document.getElementById('lnameerrormsg').style.visibility = 'visible';
       document.getElementById('lnameerrormsg').innerText = "Enter Valid Last Name";
       
       document.getElementById("lastname").value="";
   }
}

function clearlname()
{
	
	document.getElementById('lnameerrormsg').style.visibility = 'hidden';

}

function checkemail()
{
    var emailexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

   var email = document.getElementById("email").value;
   //alert(email);

   var emailflag = false;

   if(email===null||email===""){
    document.getElementById("emailerrormsg").innerHTML="Please Enter an Email Address";
}
else if(!emailexp.test(email)){
    document.getElementById("emailerrormsg").innerHTML="INVALID EMAIL ADDRESS!";
    document.getElementById("email").value="";
}
}

function clearemail()
{
 
    document.getElementById("emailerrormsg").innerHTML=""
	

}

function mobnocheck(){
    var mobnoregexp= /^[6789]\d{9}$/ ;
    //<var mobnoexp = /^[6789][0-9]{9}$/>
    var mobileno = document.getElementById("mobileno").value;
    //alert(mobno)
    if(mobileno===null||mobileno===""){
        
        document.getElementById("mobnoerrormsg").innerHTML="Please Enter Mobile No.";
    }
    else if(!mobnoregexp.test(mobileno)){
        
        document.getElementById("mobnoerrormsg").innerHTML="INVALID MOBILE NO!"
        document.getElementById("mobileno").value="";
    }
    
}

function mobnomsgclear(){
    
    document.getElementById("mobnoerrormsg").innerHTML="";
}

function pwdcheck(){
    var pwdexp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    var password=document.getElementById("password").value;
    

    if(password===null||password===""){
               document.getElementById("pwderrormsg").innerHTML="Please Enter the Password";
    }
    else if(!pwdexp.test(password)){
               document.getElementById("pwderrormsg").innerHTML="INVALID PASSWORD!";
        document.getElementById("password").value="";
        return;
    }
    
}
function pwdclear(){
    
    document.getElementById("pwderrormsg").innerHTML="";
    document.getElementById("cpwdmsg").innerHTML="";
}
function conpwdcheck(){
    var password=document.getElementById("password").value;
    var conpassword=document.getElementById("cpassword").value;
    
    if(password!=conpassword){
        
        document.getElementById("cpwdmsg").innerHTML="Passwords Do Not Match!";
        document.getElementById("cpassword").value="";
        document.getElementById("password").value="";
    }
}
function conpwdmsgclr(){
    if(document.getElementById("password").value===""||document.getElementById("password").value===null){
        document.getElementById("cpwdmsg").innerHTML="Enter the Password in the Previous Field"
    }
    else{
        
        document.getElementById("cpwdmsg").innerHTML="";
    }
}