const connection = require('./model');
const express = require("express");
const app = express();
const path = require('path');
const expressHandlebars = require('express-handlebars');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({
    extended :true
}));

app.get('/',(req,res)=>{    
    res.send("<h1>request received</h1>");
});

app.listen(3000,()=>{
    console.log("server started");
})