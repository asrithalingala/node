const express = require("express");
const dotenv = require("dotenv");
const mongoose= require("mongoose");
const bodyParser = require('body-parser')
const employeeRoutes = require('./routes/employeeRoutes')
const app = express();
const PORT = process.env.PORT || 5500
dotenv.config()
app.use(bodyParser.json())
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Mongodb connected succefully")
})
.catch((error)=>{
    console.log("Error:",error)
});

app.use('/employees', employeeRoutes)

app.listen(PORT,()=>{
    console.log(`server started and it is running at ${PORT}`)
});