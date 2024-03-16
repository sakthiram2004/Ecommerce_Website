const express=require("express");
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    return res.send("suriya");
});
app.listen(2000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is running in PORT 2000")
    }
});
