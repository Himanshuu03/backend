const express = require("express");
const { likeBlog, unLikeBlog } = require("../controllers/likeBlog");
const routerLike = express();

routerLike.put("/like/:id",likeBlog);
routerLike.put("/unlike/:id",unLikeBlog);

module.exports = routerLike;