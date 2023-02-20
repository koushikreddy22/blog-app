const express=require('express')
const app=express()
const port=4000
const cors=require('cors')
app.use(cors())
const mongoose=require('mongoose')
mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://koushik:Mn1MrKr1L45@cluster0.r8pbtfc.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.on("connected",()=>{console.log("The server is successfully connected to mongoDB")})
mongoose.connection.on("error",()=>{console.log("Connection to MongoDB failed")})
require("./models/blog.js")
require('./models/comment.js')
app.use(express.json())
app.use(require('./routes/blog.js'))


app.listen(port,()=>{console.log("The server is running on ",port)})