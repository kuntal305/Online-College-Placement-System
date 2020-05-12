var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    firstname: {type: String},
    lastname:{type : String},
    dob: { type: String },
    gender: { type: String },
    stream: { type : String},
    email: { type: String },
    mobileno: { type: String },        
    password: { type: String },
    schoolname1: {type : String},
    passingyear1: {type : String},
    board1: {type : String},
    marks1: {type: String},
    schoolname2: {type: String},
    passingyear2: {type : String},
    board2: {type : String},
    marks2: {type: String},      
    university: {type : String},
    passingyear3: {type: String},
    sem1: {type : Number},
    sem2: {type : Number},
    sem3: {type : Number},
    sem4: {type : Number},
    sem5: {type : Number},
    sem6: {type : Number},
    sem7: {type : Number},
    sem8: {type : Number},
    applied: {type:String}
   
});


module.exports = mongoose.model('StudentInfo', schema);