const express = require("express");
const dbConnect = require("./config/dbConnect");
const router = require("./routes/blogRoute");
const routerLike = require("./routes/blogLikeRoute");
const commentRouter = require("./routes/blogCommentRoute");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/posts",router);
app.use("/likes",routerLike);
app.use("/comments",commentRouter);
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log("listing at"+PORT);
})

app.get("/",(req,res)=>{
    res.send(
       "This is blog app backend server"
    )
})

//connection between db and backend-server
dbConnect();