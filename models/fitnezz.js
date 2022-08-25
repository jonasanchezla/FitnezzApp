const mongoose = require("mongoose");

const fitnezzSchema = new mongoose.Schema({
    day: { type: String, required: true},
    name: { type: String, required: true},
    sets:{ type: Number, required: true},
    reps:{ type: Number, required: true}
})

const Fitnezz = mongoose.model("Fitnezz", fitnezzSchema)

module.exports = Fitnezz