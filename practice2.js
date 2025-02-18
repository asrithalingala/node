const express = require("express");
const app = express();
const port = 5000;

const firstHandler = ((req,res,next)=>{
    if(10>20){
        next();
    }else
    {
        res.send("Condition failed: 10 is not greater than 20");
    }
    
    
})

app.get('/home',firstHandler, (req, res) => {
    res.send("Hello! I'm Home page");
});

app.get('/about', (req, res) => {
    res.send("Hello! I'm about page");
});

app.listen(port, () => {
    console.log("Server started successfully on port " + port);
});
