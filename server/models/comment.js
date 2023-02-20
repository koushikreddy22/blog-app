const mongoose=require('mongoose')
const commentSchema=mongoose.Schema({
    comment:{
        type:String
    },
    id:{
        type:mongoose.Types.ObjectId,
        ref:'Blogs'
    }
})
mongoose.model('Comments',commentSchema)