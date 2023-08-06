const Mood = require("../models/MoodModel");
const mongoose = require("mongoose");



// get request
const getAllMoods = async(req, res)=>{
    res.status(200).json({msg: "Here are all the moods"});
}

// post a mood
const postAMood = async (req, res)=>{
    res.status(200).json({msg: "You posted a mood"});
}


module.exports = {
    getAllMoods,
    postAMood
}