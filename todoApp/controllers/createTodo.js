const Todo = require("../models/todoModel");

exports.createTodo = async(req,res) =>{
    try {
        const {title,description} = req.body;
        const response = await Todo.create({title,description});
        res.sendStatus(200)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
}