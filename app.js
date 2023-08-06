const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
const moodRouter = require("./routes/moodRouter");
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
  app.listen(3001, ()=>{
    console.log("Connection established");
    console.log("listening on port 3001");
  })
  
})
.catch((error)=>{
  console.log("Could not connect to MongoDB", error); 
})

app.get("/", (req, res)=>
  res.status(200).json({
    msg: "Welcome to the Moodle API"
  })
)

app.use("/api/moods", moodRouter )