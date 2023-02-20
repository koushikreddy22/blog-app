const mongoose=require('mongoose')

const blogSchema=new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    }
})
mongoose.model('Blogs',blogSchema)