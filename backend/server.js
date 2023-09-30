import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import blogModel from './model/model.js'



import dbConnected from './database_connect/dbconnection.js'




const app=express();
const port=process.env.PORT;

//middleware
app.use(express.json())
app.use(cors());

app.post('/post_blog',async(req,res)=>{
    const data=req.body;
    const allD=blogModel(data);
    await allD.save()
    res.status(200).json({message:"data posted successfull"})
})


app.get('/',async(req,res)=>{
    const data=await blogModel.find()
    res.send(data)
})


app.delete('/delete_blog/:id',async(req,res)=>{
    let data=await blogModel.findByIdAndDelete(req.params.id);
    res.json({message:"the blog deletes successfully"})
})


//update

app.put('/update_blog/:id',async(req,res)=>{
    let blog=await blogModel.findByIdAndUpdate(req.params.id);
    if(!blog){
        res.status(404).json({message:"no blog found"})
    }
    if(!req.body.title && !req.body.description){
        res.json({message:"enter your title and description"})
    }else if(!req.body.title){
        blog.description=req.body.description
    }else if(!req.body.description){
        blog.title=req.body.title
    }else{
        blog.title=req.body.title;
        blog.description=req.body.description;
    }
    await blog.save();
    res.status(201).json({message:"updated successfulluy"})
})











app.listen(port,()=>{
    dbConnected();
    console.log(`server is running on the port ${port}`)
})