const express = require("express");
const app= express();
const Fitnezz = require("./models/fitnezz.js")
const methodOverride = require('method-override');
const session = require('express-session')

const mongoose = require('mongoose');

// Global configuration
const mongoURI = 'mongodb://localhost:27017/'
const db = mongoose.connection

// Connect to Mongo
mongoose.connect(mongoURI)
mongoose.connect(mongoURI, () => {
    console.log('the connection with mongod is established')
  })
  



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