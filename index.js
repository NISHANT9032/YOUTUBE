const express = require("express");
const videorouter = require("./videorouter");
const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/youtube').then(()=>{
 console.log("DB CONNECTED");
});

const app=express();
app.use(express.json());
app.use(videorouter);

app.get("/video",  (req , res)=>{
  res.send("Hello");
});

app.post("/video",  (req , res)=>{
    console.log(req.body);
    const arr=[1,2,3,4,5]; 
    res.send(arr);
  });

app.listen(3000,onServerstart);

 function onServerstart(){

 console.log("Server starts");
};

