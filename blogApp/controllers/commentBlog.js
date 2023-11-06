const Blog  = require("../models/blogModal");

exports.createComment = async(req,res)=>{
    try {
        const id = req.params.id;
        const {commentText} = req.body;
        const comments = await Blog.findByIdAndUpdate(id,{$push :{comment:commentText}});
        res.status(200).json({
            success:true,
            data:comments,
            message:"comment Added",
        })
        } catch (error) {
            res.status(500).json({
                success:false,
                message:"error in adding comments",
            }) 
        }
}

exports.fetchAllComments = async (req,res) =>{
    try {
        const id = req.params.id;
        const allComment = await Blog.findById(id,"comment");
        res.status(200).json({
            success:true,
            data:allComment,
            message:"all comment read",
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"error in fetching comments",
        }) 
    }
}