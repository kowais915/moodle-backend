const mongoose = require("mongoose");
const express = require("express");

const Schema =  mongoose.Schema;

const moodSchema = new Schema({
    
    happy:{type: Boolean},
    sad: {type: Boolean},
    neutral: {type: Boolean},
    angry: {type: Boolean},
    anxious: {type: Boolean}

    
})


const Mood = mongoose.model("Mood", moodSchema);

module.exports = {
    Mood
}