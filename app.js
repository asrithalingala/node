const express = require("express");
const app = express();
const port = 5000;

app.get('/home', (req, res) => {
    res.send("Hello! I'm Home page");
});

app.get('/about', (req, res) => {
    res.send("Hello! I'm about page");
});

app.listen(port, () => {
    console.log("Server started successfully on port " + port);
});
