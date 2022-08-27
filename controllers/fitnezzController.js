const express= require("express");
const router= express.Router()
const Fitnezz = require("../models/fitnezz.js")


//Index Route
router.get("/", (req,res)=>{
    Fitnezz.find({}, (error, fitnezz)=>{
        res.render("index.ejs",{ fitnezz})
    })
})

//POST
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

//New 
router.get('/new', (req, res) => {
	res.render('new.ejs');
});

//SHOW ROUTE
router.get('/:id',(req,res)=>{
    Fitnezz.findById(req.params.id , (err, fitnezz) =>{
        res.render('show.ejs', {
            fitnezz: fitnezz
        })
    })
})

// EDIT
router.get('/:id/edit', (req, res) => {
	Fitnezz.findById(req.params.id, (err, editApp) => {
		res.render('edit.ejs', {fitnezz: editApp})
	})
})

// UPDATE
router.put('/:id', (req, res) => {
	Fitnezz.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, updatedModel) => {
        console.log(req.params.id);
        console.log(req.body);
		res.redirect('/fitnezz')
	})
})

//DELETE
router.delete('/:id', (req,res) =>{
    Fitnezz.findByIdAndDelete(req.params.id, (err,product) =>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/fitnezz')
        }
    })
})



module.exports= router