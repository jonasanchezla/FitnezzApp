const express = require("express");
const app= express();
const Fitnezz = require("./models/fitnezz.js")
const methodOverride = require('method-override');
const session = require('express-session')


const PORT = process.env.PORT || 3000;


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
    <h1 class="center">Welcome to my Fitnezz App!!</h1>
    <br>
    <br>
    <nav class="centered">
    <a href="/fitnezz">Fitnezz App Home Page</a>
    |
    <a href="/fitnezz/new">Create a New Workout</a>
    </nav>
    <style>
p {
  background-image: url('https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGd5bXxlbnwwfHwwfHw%3D&w=1000&q=80');
  background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 120%;
}
.centered {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: White;
  font-size:30px;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: White;
  font-size: 50px;
}

</style>

<p>${today}</p>`);
});

app.listen(PORT, ()=>{
    console.log("Fitnezz App Server is running");
})