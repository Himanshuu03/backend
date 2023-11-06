const Blog = require("../models/blogModal");

exports.createBlog = async(req,res) =>{
    try {
        const {title,description} = req.body;
        const blogs = await Blog.create({title,description,like:false,unLike:false});
        res.status(200).json(
            {
                success:true,
                data:blogs,
                message:"field added"
            }
        )  
    } catch (error) {
        res.status(500).json(
            {
                success:false,
                message:`error occur + ${error}`
            }
        ) 
    }
}

exports.fetchBlog = async(req,res)=>{
    try {
        const allBlogs = await Blog.find({});
        res.status(200).json(
            {
                success:true,
                data:allBlogs,
            }
        )  
    } catch (error) {
        res.status(500).json(
            {
                success:false,
                message:`error occur + ${error}`
            }
        ) 
    }
}