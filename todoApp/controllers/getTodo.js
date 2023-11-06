const Todo = require("../models/todoModel");

exports.getTodo = async(req,res) =>{
    try {
        const todos = await Todo.find({});
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire todo data"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message,
        })
    }
}

exports.getTodoById = async(req,res) =>{
    try{
        const id = req.params.id;
        const todo = await Todo.findById(id);
        if(!todo){
            res.status(404).json({
                data:"data not found"
            }
        )}
        else{
            res.status(200).json({
                data:todo,
            })
        }
    }catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message,
        })
    }
}