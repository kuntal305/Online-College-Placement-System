var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var schema = new Schema({
    date: {type: String},
    job: {type:String},
    jobid: {type: String},
    package: {type: String},
    place: {type:String},
    criteria1: {type: String},
    criteria2: {type: String},
    criteria3: {type: String},
    companyname: {type:String},
    hrname: {type: String},
    approve: {type:Boolean},
    reject: {type: Boolean},
    companyemail: {type: String}
});

module.exports=mongoose.model('dateselect',schema);