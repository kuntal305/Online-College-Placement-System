const contactmessage = require("../models/contactmessage");
var StudentInfo=require('../models/studentinfo');
var dateselector=require('../models/dateselector');
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

const storemessage = ( req, res ) => 
   {
    console.log("INSIDE Student CONTROLLER");
     
    var contactobj = new contactmessage({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
                });

    contactobj.save((err, inserteddocument) => 
    {
        if (!err) 
           res.render('./messagesent',{messagesent : true});
        else 
           console.log('Error in storing message :' + JSON.stringify(err, undefined, 2)); 
    });
  };

  const studentregistration = ( req, res ) => 
   {
    console.log("INSIDE Student CONTROLLER");
     
    var studobj = new StudentInfo({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        mobileno: req.body.mobileno,
        gender: req.body.gender,
        dob: req.body.dob,
        password: req.body.password,
        stream: req.body.stream,
        schoolname1: req.body.schoolname1,
        passingyear1: req.body.passingyear1,
        board1: req.body.board1,
        marks1: req.body.marks1,
        schoolname2: req.body.schoolname2,
        passingyear2: req.body.passingyear2,
        board2: req.body.board2,
        marks2: req.body.marks2,
        university: req.body.university,
        passingyear3: req.body.passingyear3,
        sem1: req.body.sem1,
        sem2: req.body.sem2,
        sem3: req.body.sem3,
        sem4: req.body.sem4,
        sem5: req.body.sem5,
        sem6: req.body.sem6,
        sem7: req.body.sem7,
        sem8: req.body.sem8

      });

    studobj.save((err, inserteddocument) => 
    {
        if (!err) 
           res.render('./student/login',{hasstudentregistered : true});
        else 
           console.log('Error in registering student :' + JSON.stringify(err, undefined, 2)); 
    });
  };

const checkstudentlogin = ( req, res ) => 
{
   console.log("INSIDE Student CHECK LOGIN CONTROLLER");
   
   var useremail = req.body.email;
   var userpassword = req.body.pass;
   
   StudentInfo.find({email: useremail,password: userpassword}, (err, getmatcheddocumentfrommongodb) => 
   {
      
      if (!err) 
      {
         hasAnyUser = getmatcheddocumentfrommongodb.length > 0 ;
         if(hasAnyUser){
            dateselector.find({approve:true},(err,getmatcheddocument)=>{
               localStorage.setItem('uemail',useremail);
               localStorage.setItem('udetails',JSON.stringify(getmatcheddocumentfrommongodb));
               localStorage.setItem('message',JSON.stringify(getmatcheddocument));
               
               res.redirect('/student/studentprofile');
            })
            
         }
            else
            res.render('./student/login',{hasnotloggedin : true});
      }
      else 
      console.log('Error in Retriving USER :' + JSON.stringify(err, undefined, 2)); 
   
   });
  
};





    
  module.exports = { storemessage,studentregistration,checkstudentlogin };