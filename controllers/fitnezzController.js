const express= require("express");
const router= express.Router()
const Fitnezz = require("../models/fitnezz.js")

router.get("/", (req,res)=>{
    Fitnezz.find({}, (error, fitnezz)=>{
        res.render("index.ejs",{ days: fitnezz})
    })
})

router.post("/", (req,res)=>{
    Fitnezz.create(req.body, (error, createDay)=>{
        if (error){
            console.log("error", error);
            res.send(error);
        } else {
            res.redirect("/fitnezz");
        }
    })
})

router.get('/new', (req, res) => {
	res.render('new.ejs');
});


module.exports= router