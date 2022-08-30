const express = require("express");
const app= express();
const Fitnezz = require("./models/fitnezz.js")
const methodOverride = require('method-override');
const session = require('express-session')


const PORT = process.env.PORT || 4000;


const mongoose = require('mongoose');

// Global configuration
const mongoURI = 'mongodb+srv://admin:BGTbgt55@jonascluster.fmvzo5e.mongodb.net/Fitnezz-Project?retryWrites=true&w=majority'
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


// DEFAULT
app.get('/', (req, res) => {
	const today = new Date();
	res.send(`
    <h1>Welcome to my Fitnezz App!!</h1>
    <p>${today}</p>
  `);
});

app.listen(PORT, ()=>{
    console.log("Fitnezz App Server is running");
})