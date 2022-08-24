const express= require("express");
const router= express.Router()
const Fitnezz = require("../models/fitnezz.js")

router.get("/", (req,res)=>{
    res.send("test 2")
})


module.exports= router