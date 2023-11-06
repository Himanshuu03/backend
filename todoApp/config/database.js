const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(
        ()=>{
            console.log("db connect successfully");
        }
    )
    .catch(
        (error)=>{
            console.log("db did'nt connect successfully");
        }
    )
}

module.exports = dbConnect;