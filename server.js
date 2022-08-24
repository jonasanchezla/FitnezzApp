const express = require("express");
const app= express();
const Fitnezz = require("./models/fitnezz.js")
const methodOverride = require('method-override');
const session = require('express-session')

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

const fitnezzController= require("./controllers/fitnezzController.js")
app.use("/fitnezz", fitnezzController)


app.listen(3000, ()=>{
    console.log("Fitnezz App Server is running");
})