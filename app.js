const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
require('dotenv').config();

const app = express();

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