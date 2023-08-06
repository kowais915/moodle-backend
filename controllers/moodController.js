const {Mood} = require("../models/MoodModel");
const mongoose = require("mongoose");



// get request
const getAllMoods = async (req, res)=>{
    try{
        const moods = await Mood.find({});
        res.status(200).json({moods});
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}
    

// post a mood
const postAMood = async (req, res)=>{
    const {happy, sad, neutral, angry, anxious } = req.body;

    try{
        const postedMoods = await Mood.create({happy, sad, neutral, angry, anxious});
        res.status(200).json({postedMoods})
    }
    catch(err){
        res.status(400).json({err: err.message});
    }
   
}


module.exports = {
    getAllMoods,
    postAMood
}