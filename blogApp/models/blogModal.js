const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50
        },
        description:{
            type:String,
            required:true,
            maxLength:200
        },
        like:{
            type:Boolean,
        },
        unLike:{
            type:Boolean,
        },
        comment:[]
    }
)

module.exports = mongoose.model("blogModal",blogSchema);