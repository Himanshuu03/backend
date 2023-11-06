const Todo = require("../models/todoModel");

exports.updateTodo = async(req,res)=>{
    try {
        const {id} = req.params;
        const {title,description} = req.body;
        const updateTodoEntry = await Todo.findByIdAndUpdate(
            id,
            {title,description,updatedAt:Date.now()}
        )
        res.status(200).json({
            success:true,
            data:updateTodoEntry,
            message:"data has been updated successfully"
        }) 
    } catch (error) {
        res.status(500).json({
            success:false,
            data:"No data",
            message:error
        })
    }
}

