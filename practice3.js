const express = require("express");
const dotenv = require("dotenv");
const{MongoClient}= require("mongodb")
const app = express();
dotenv.config()
MongoClient.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Mongodb connected succefully")
})
.catch((error)=>{
    console.log("error",error)
})
const Port = 5000
console.log(process.env)
app.listen(Port,()=>{
    console.log(`server started and it is running at ${Port}`)
})