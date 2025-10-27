const express=require("express");
const cors=require("cors");
const app=express()

app.use(express.json())
app.use(cors({origin:"*"}))

app.get("/",function(req,res){
    let data="hi guys this is node.js server";
    res.json({data});
})

app.listen(3000,function(){
    console.log("the server is running");
})