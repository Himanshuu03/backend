const Todo = require("../models/todoModel");

exports.deleteTodo = async(req,res)=>{
    try {
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"entry has been deleted"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"entry does'nt deleted"
        })
    }
}