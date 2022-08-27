const mongoose = require("mongoose");

const fitnezzSchema = new mongoose.Schema({
    day: { type: String, required: true},
    exercise1: { type: String, required: true},
    exercise2: { type: String, required: true},
    exercise3: { type: String, required: true},
    exercise4: { type: String, required: true},
    exercise5: { type: String, required: true},
    exercise6: { type: String, required: true},
    sets1: Number,
    sets2: Number,
    sets3: Number,
    sets4: Number,
    sets5: Number,
    sets6: Number,
    reps1: Number,
    reps2: Number,
    reps3: Number,
    reps4: Number,
    reps5: Number,
    reps6: Number,
})

const Fitnezz = mongoose.model("Fitnezz", fitnezzSchema)

module.exports = Fitnezz