const Blog = require("../models/blogModal");

exports.likeBlog = async(req,res)=>{
    try {
        const id = req.params.id;
        await Blog.findByIdAndUpdate(
            id,
            {like:true,unLike:false}
        )
        res.status(200).json({
            success:true,
            message :"Blog liked successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error
        })
    }
}

exports.unLikeBlog = async(req,res)=>{
    try {
        const id = req.params.id;
        await Blog.findByIdAndUpdate(
            id,
            {like:false,unLike:true}
        )
        res.status(200).json({
            success:true,
            message :"Blog unliked successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error
        })
    }
}