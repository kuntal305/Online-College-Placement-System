var StudentInfo=require('../models/studentinfo');
var AdminInfo=require('../models/admininfo');
var contactmessage=require('../models/contactmessage');
var CompanyInfo=require('../models/companyinfo');
var dateselector=require('../models/dateselector');

const adminloginCheck = ( req, res ) => 
   {
    var adminemail = req.body.email;
    var adminpassword = req.body.pass;
     console.log("ADMIN USER ID " + adminemail);
     console.log("ADMIN PASSWORD " + adminpassword);

     /*AdminInfo.findOne({email : adminemail, password: adminpassword}),(err,getsearcheddocumentfrommongodb)=>{
         if(!err){
             res.render('./admin/adminprofile',{getsearcheddocumentfrommongodb});
         }
         else   
            console.log('Error in ')
     }*/

     if((adminemail === 'admin@abc.com') && (adminpassword === 'admin'))
        res.redirect('/admin/adminprofile');
     else
        res.render('./admin/adminlogin',{hasadminnotloggedin : true});
     
    };

const adminusersearch = ( req, res ) => 
{
    var username = req.body.name;

    console.log("INSIDE ADMIN SEARCH USER CONTROLLER  " + username);

    StudentInfo.find({ firstname : username}, (err, getsearcheddocumentfrommongodb) => 
    {
        if (!err) 
        {   
            status = true;
            hasAnyUser = getsearcheddocumentfrommongodb.length > 0 ;
            res.render('./admin/searchuser',{getsearcheddocumentfrommongodb,hasAnyUser,status}); 
        }
        else 
            console.log('Error in Retriving USER :' + JSON.stringify(err, undefined, 2)); 
       
    });
   
};

const companysearch= (req,res)=>{
    var comname=req.body.name;
    console.log('Inside Company Search Controller');
    CompanyInfo.find({companyname: comname},(err,getdocument)=>{
        status= true;
        hasanycompany = getdocument.length > 0;
        res.render('./admin/searchcompany',{getdocument,hasanycompany,status});
    });
};

const viewalluser = (req,res)=>{
    console.log("Inside admin view all user controller");
    StudentInfo.find({},(err,getdocumentfrommongodb)=>{
        if(!err){
            status = true;
            hasAnyUser = getdocumentfrommongodb.length > 0 ;
            res.render('./admin/viewalluser',{getdocumentfrommongodb,hasAnyUser,status}); 
        }
        else 
            console.log('Error in Retriving USERS :' + JSON.stringify(err, undefined, 2));
    });

};

const viewallcompany = (req,res)=>{
    console.log("Inside Admin view all company controller");
    CompanyInfo.find({},(err,getdocumentfrommongodb)=>{
        if(!err){
            status=true;
            hasanycompany = getdocumentfrommongodb.length > 0;
            res.render('./admin/viewallcompany',{getdocumentfrommongodb,hasanycompany,status});
        }
        else    
            console.log('Error in Retrieving Company database: '+JSON.stringify(err,undefined,2));
    });
};

const deleteuser = (req,res)=>{
    useremail=req.body.email;
    console.log("Inside admin delete user controller");
    
    StudentInfo.findOneAndDelete({email:useremail},(err,deletedocument)=>{
        if(!err){
            
            res.redirect('/admin/alluser'); 
        }
        else 
            console.log('Error in Retriving USERS :' + JSON.stringify(err, undefined, 2));
    });
}

const checkmessage = (req,res)=>{
    console.log("Inside check message controller");
    contactmessage.find({},(err,getsearcheddocumentfrommongodb)=>{
        if(!err){
            status=true;
            hasanymessages = getsearcheddocumentfrommongodb.length >0;
            res.render('./admin/adminmessages',{getsearcheddocumentfrommongodb,hasanymessages,status})
        }
        else
            console.log('Error in Retrieving messages: '+ JSON.stringify(err,undefined,2));
    })
}

const notificationview = (req,res)=>{
    console.log('Inside admin date authorization controller');
    dateselector.find({approve:null,reject:null},(err,getsearcheddocument)=>{
        if(!err){
            hasnotifications = getsearcheddocument.length > 0
            console.log(hasnotifications)
            res.render('./admin/notifications',{getsearcheddocument,hasnotifications})
        }
        else    console.log('Error In retrieving messages: ' +JSON.stringify(err,undefined,2))
    })
}

const checkdate = (req,res)=>{
    console.log('Inside admin check date controller');
     var companydate=req.body.date;
     console.log(companydate)
     dateselector.find({date:companydate},(err,getdocument)=>{
        if(!err){
            dateavailability= getdocument.length>1;
            console.log(dateavailability)
            if(dateavailability){
                console.log('Inside admin date not available controller');

                dateselector.find({},(err,getsearcheddocument)=>{
                    if(!err){
                        
                        hasnotifications = getsearcheddocument.length > 0;
                        res.render('./admin/notifications',{getsearcheddocument,hasnotifications,datenotavailable:true});
                        
                        
                    }
                    else    console.log('Error in fetching date model' +JSON.stringify(err,undefined,2))
                })
            }
                
            else{
                dateselector.find({},(err,getsearcheddocument)=>{
                    if(!err){
                        
                        console.log('Inside admin date available controller');
                        hasnotifications = getsearcheddocument.length > 0
                        res.render('./admin/notifications',{getsearcheddocument,hasnotifications,dateavailable:true});
                        
                    }
                        else    console.log('Error in fetching date model' +JSON.stringify(err,undefined,2))
                })
            }    
                
        }
        else   console.log('Error in Checking date: ' +JSON.stringify(err,undefined,2));
     })
}

const approved=(req,res)=>{
    var id=req.body.approve;
    console.log(id)
    dateselector.updateOne({jobid: id},{$set:{approve: true}},(err,getmatcheddocument)=>{
        
        res.redirect('/admin/notifications')        
    })
}

const rejected = (req,res)=>{
    var id=req.body.reject;
    dateselector.updateOne({jobid:id},{$set:{reject: true}},(err,getmatcheddocument)=>{
        res.redirect('/admin/notifications')
    })
}

module.exports = { adminloginCheck,adminusersearch,viewalluser,deleteuser,checkmessage,companysearch,viewallcompany,notificationview,checkdate,approved,rejected };