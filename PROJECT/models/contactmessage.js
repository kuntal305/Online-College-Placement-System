var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String},
    email: {type: String},
    message: {type: String}
});

module.exports = mongoose.model('contactmessage', schema);