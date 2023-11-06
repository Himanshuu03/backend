const express = require("express");
const { createBlog, fetchBlog } = require("../controllers/createBlog");
const router = express.Router();


router.post("/createBlog",createBlog);
router.get("/",fetchBlog);


module.exports = router;