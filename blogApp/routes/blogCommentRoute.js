const express = require("express");
const { createComment, fetchAllComments } = require("../controllers/commentBlog");
const commentRouter = express();

commentRouter.put("/create/:id",createComment);
commentRouter.get("/:id",fetchAllComments);

module.exports = commentRouter;