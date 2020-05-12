var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var schema = new Schema({
    title: {type: String},
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String},
    mobileno: {type: String},
    password: {type: String},
    companyname: {type: String},
    companyemail: {type: String},
    regno: {type: String},
    url: {type: String},
    address: {type: String},
    zip: {type: String},
    state: {type: String},
    message: {type: String}
});


module.exports=mongoose.model('CompanyInfo',schema);