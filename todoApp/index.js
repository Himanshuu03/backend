const express = require("express");
const app = express();
const dbConnect = require("./config/database");

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

const todoRoute = require("./routes/todos");


app.use("/api/v1",todoRoute)

app.listen(PORT,()=>{
    console.log("listen at"+PORT);
})

dbConnect();
app.get("/",(req,res)=>{
    res.send(`<h1>This is home page</h1>`)
})