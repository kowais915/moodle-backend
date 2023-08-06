const express = require("express");
const route = express.Router();
const {
    getAllMoods,
    postAMood

} = require("../controllers/moodController")

route.get("/", getAllMoods)

// post a mood
route.post("/", postAMood)


module.exports = route;