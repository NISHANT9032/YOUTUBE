const express =require("express");

const videorouter =express.Router();
const a =[];

videorouter.get("/video",(req,res)=>{
    res.send(a);
});
videorouter.post("/video",(req,res)=>{
    a.push(1);
    res.send(a);
});
videorouter.put("/video",(req,res)=>{
    a[0]=2;
    res.send(a);
});
videorouter.delete("/video",(req,res)=>{
    a.pop(1);
    res.send(a);
});
module.exports = videorouter;