const express = require('express')

const router = express.Router(); 

const BlogControllers = require("../controllers/BlogController")

router.get('/', BlogControllers.redirecToBlogs)
router.get('/add-blog', BlogControllers.renderPostPage);
router.post('/add-blog', BlogControllers.addNewBlog);
router.get('/blogs',BlogControllers.getAllBlog);
router.get('/blog/:id',BlogControllers.getsingleBlog);

module.exports = router