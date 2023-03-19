const express=require("express");
const collection=require("./mongo");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())


app.post("/",async(req,res)=>{
    const {email,password}=req.body
    try{
        const check=await collection.findOne({email:email})
        if(check)
        {
            res.json("Exist")
        }
        else
        {
            res.json("Not Exist")   
        }

    }
    catch(e)
    {
        res.json("Not Exist")
    }
})

app.post("/signup",async(req,res)=>{
    const {email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})
        if(check)
        {
            res.json("Exist")
        }
        else
        {
            res.json("Not Exist")  
            await collection.insertMany([data]) 
        }

    }
    catch(e)
    {
        res.json("Not Exist")
    }
})
app.listen(8000,()=>
{
    console.log("port connected");
})