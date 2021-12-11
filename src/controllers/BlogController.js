const Blog = require("../models/Blog");
const moment = require("moment")

const redirecToBlogs = (req, res) => {
    res.redirect('/blogs');
} 

const getAllBlog = (req,res)=>{
    Blog.find()
    .then((results)=>{
       res.render("index",{
           title:"Blogs",
           results:results,
           moment: moment
        })
    })
}
const renderPostPage = (req,res)=> {
    res.render("create",{
        title:"Add Post"
    });
}

const addNewBlog = (req, res) => {
    console.log(req.body);
    const blog = new Blog(req.body);
  
    blog.save()
      .then((result)=>{
        res.status(200).send("Saved")
      })
      .catch((err) =>{
          res.status(500).send("Couldnt save")
          console.log(err);
      })
  
}

const getsingleBlog = (req, res) => {
    let id = req.params.id
    Blog.findById(id)
    .then((result) =>{
        res.render('details',{
           title:result.title,
           result:result,
           moment: moment
        })
    })
}

module.exports = {
    redirecToBlogs,
    renderPostPage,
    getAllBlog,
    addNewBlog,
    getsingleBlog
}