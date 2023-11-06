const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.listen(3001,()=>{
    console.log("listening at 3001");
})

app.get("/",(req,res)=>{
    res.send("get at /")
})

mongoose.connect("mongodb://localhost:27017/himanshu",{
    useNewUrlParser :true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("db connected");
})
.catch(()=>{
    console.log("db fail to connect");
})