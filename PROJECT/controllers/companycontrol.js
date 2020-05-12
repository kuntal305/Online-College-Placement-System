var CompanyInfo=require('../models/companyinfo');
var dateselect=require('../models/dateselector');
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

const companyregistration=(req,res)=>{

    console.log("Inside Company registration Controller");
    
    var comobj= new CompanyInfo({
        title: req.body.title,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        mobileno: req.body.mobileno,
        password: req.body.password,
        companyname: req.body.companyname,
        regno: req.body.regno,
        companyemail: req.body.companyemail,
        url: req.body.url,
        address: req.body.address,
        zip: req.body.zip,
        state: req.body.state
    });
    comobj.save((err, inserteddocument)=>{
        if(!err)
            res.render('./company/login',{hascompanyregistered:true});
        else    
        console.log("Error in Registering company: "+ JSON.stringify(err,undefined,2));
    });
};

const checkcompanylogin=(req,res)=>{
    console.log("Inside company login check controller");

    var useremail=req.body.email;
    var userpassword=req.body.pass;

    CompanyInfo.find({email: useremail, password: userpassword},(err,getmatcheddocument)=>{
        if(!err){
            hasmatched= getmatcheddocument.length>0;
            if(hasmatched){
                localStorage.setItem("uemail",useremail);
                localStorage.setItem("udetails",JSON.stringify(getmatcheddocument));
                res.redirect('/company/companyprofile');
            }
            else    res.render('./company/login',{hasnotloggedin: true});
        }
        else    
            console.log("Error in Company login:" +JSON.stringify(err,undefined,2));
            
    });
};

const dateselector = (req,res)=>{
    console.log("Inside Date selector controller");
    
    var dateobj = new dateselect({
        date: req.body.date,
        job: req.body.job,
        jobid: req.body.jobid,
        package: req.body.package,
        place : req.body.place,
        criteria1: req.body.criteria1,
        criteria2: req.body.criteria2,
        criteria3: req.body.criteria3,
        companyemail :req.body.comemail,
        companyname: req.body.comname,    
        hrname: req.body.hrname
    });
    
  
        
    
    dateobj.save((err,saveddocument)=>{
        if(!err)
        {   
            localStorage.setItem('uemail',dateobj.companyemail);
            res.redirect('/company/datesubmitted');
        }
         else    
            console.log("Error in storing date: " +JSON.stringify(err,undefined,2))
    })
};

const back = (req,res)=>{
    var comemail=req.body.comemail;
    
    localStorage.setItem('uemail',comemail);
    res.redirect('/company/companyprofile');
}

const applications = (req,res)=>{
    var x = localStorage.getItem('uemail');
    localStorage.setItem('emailid',x);
    
    res.redirect('/company/applicationsview');
}

const messages=(req,res)=>{
    var x = localStorage.getItem('uemail');
    localStorage.setItem('emailid',x);
    dateselect.find({$or:[{approve:true},{reject:true}],companyemail:x},(err,getmatcheddocument)=>{
        console.log(getmatcheddocument.length)
        localStorage.setItem("details",JSON.stringify(getmatcheddocument));
        res.redirect('/company/viewmessages');
    })
}

module.exports={companyregistration,checkcompanylogin,dateselector,back,applications,messages};
