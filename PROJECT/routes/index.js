var express = require('express');
var router = express.Router();
var studentcontrol=require('../controllers/studentcontrol')
var admincontrol=require('../controllers/admincontrol');
var companycontrol=require('../controllers/companycontrol');

//Get home page
router.get('/',(req,res,next)=>{
    res.render('home',{title: 'Home Page'});
});
router.get('/contact',(req,res,next)=>{
    res.render('contactus',{title: 'Contact Us'})
});
router.post('/contactmsg',studentcontrol.storemessage);
module.exports=router;





/*================================ADMIN================================*/





router.get('/admin/adminlogin',(req,res,next)=>{
    res.render('./admin/adminlogin');
});
router.post('/admin/logincheck',admincontrol.adminloginCheck);

router.get('/admin/adminprofile',(req,res,next)=>{
    res.render('./admin/adminprofile');
});

router.post('/admin/searchstudent',admincontrol.adminusersearch);

router.get('/admin/searchuser',(req,res,next)=>{
    res.render('./admin/searchuser');
});

router.get('/admin/alluser',admincontrol.viewalluser);
router.post('/admin/delete',admincontrol.deleteuser);
router.get('/admin/checkmessages',admincontrol.checkmessage);
router.get('/admin/searchcompany',(req,res,next)=>{
    res.render('./admin/searchcompany');
});
router.post('/admin/searchhr',admincontrol.companysearch);

router.get('/admin/allcompany',admincontrol.viewallcompany);

router.get('/admin/notifications',admincontrol.notificationview);

router.post('/admin/checkdate',admincontrol.checkdate);
router.post('/admin/approve',admincontrol.approved);

router.post('/admin/reject',admincontrol.rejected);



/*==============================STUDENT==============================*/




router.get('/student/reg',(req,res,next)=>{
    res.render('./student/reg');
});

router.get('/student/login',(req,res,next)=>{
    res.render('./student/login');
});
router.post('/student/registerdb',studentcontrol.studentregistration);




router.post('/student/checkstudentlogin',studentcontrol.checkstudentlogin)

router.get('/student/studentprofile',(req,res,next)=>{
    var x = localStorage.getItem('uemail'); 
    var y = localStorage.getItem('udetails');
    y = JSON.parse(y);
    
    var z= localStorage.getItem('message');
    console.log(z.criteria1);

    z=JSON.parse(z);
    res.render('./student/studentprofile',{email: x,detail: y,messages: z});
})



/*===========================COMPANY=============================*/




router.get('/company/login',(req,res,next)=>{
    res.render('./company/login');
});
router.get('/company/reg',(req,res,next)=>{
    res.render('./company/reg')
});
router.post('/company/logincheck',companycontrol.checkcompanylogin);

router.post('/company/registerdb',companycontrol.companyregistration);
router.post('/company/select',companycontrol.dateselector);

router.post('/company/back',companycontrol.back);

router.get('/company/companyprofile',function(req,res,next){
    var x = localStorage.getItem('uemail');
    var y =localStorage.getItem('udetails');
    y=JSON.parse(y)
    
    res.render('./company/companyprofile',{test : x,test1:y})
})

router.get('/company/datesubmitted',(req,res,next)=>{
    var x=localStorage.getItem('uemail');
    res.render('./company/datesubmitted',{test:x})
})

router.get('/company/applications',companycontrol.applications);

router.get('/company/applicationsview', (req,res,next)=>{
    var x=localStorage.getItem('emailid');
    res.render('./company/applications',{test : x})
})

router.get('/company/adminmessages',companycontrol.messages)

router.get('/company/viewmessages',(req,res)=>{
    var x=localStorage.getItem('emailid');
    var y=localStorage.getItem('details');
    y= JSON.parse(y)
    res.render('./company/adminmessages',{test1:x,test2:y})
})