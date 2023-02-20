const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Blog=mongoose.model('Blogs')
const Comment=mongoose.model("Comments")

router.post('/addblog',(req,res)=>{
    const {title,description}=req.body
    if(title.length<1 || description.length<1){
        return res.status(422).json("please fill all fields")
    }else{
    const blog=new Blog({
        title,
        description
    })
    blog.save().then((result)=>{
        res.status(200).json({blog:result})
    }).catch((err)=>{
       return res.status(422).json({err})
    })
}
})
router.get('/allblogs',(req,res)=>{
    Blog.find().then((data)=>{
        res.send({data})
    }).catch((err)=>{
       return res.status(422).json({err})
    })
})
router.post('/comment',(req,res)=>{
    const {id,comment}=req.body
    if(comment.length<1){
        return res.status(422).json("please fill all fields")
    }else{
    const comments=new Comment({
        comment,
        id
    })
    comments.save().then((result)=>{
        res.status(200).json({comment:result})
    }).catch((err)=>{
       return res.status(422).json({err})
    })
}
})
router.post('/getcomments',(req,res)=>{
    const {id}=req.body
    Comment.find({id}).then((data)=>{
        res.send({data})
    }).catch((err)=>{
       return res.status(422).json({err})
    })
})
module.exports=router