const express=require('express');
const exphbs=require('express-handlebars');


var path=require('path');
var indexRouter=require('./routes/index');  //redirect to index.js router

//link with dbconnect.js :- connect with Mongodb
const mongoose=require('./dbconnect');

const app=express();

app.engine('.hbs',exphbs({defaultlayout: 'main', extname: '.hbs'}));

//use handlebars view engine extension
app.set('view engine','.hbs');

/*
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
*/

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',indexRouter);

app.listen(5000,()=>{
    console.log('Express Server is running at port 5000')
});

module.exports=app;
