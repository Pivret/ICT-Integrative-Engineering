const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res)=>{
    res.send("<h1>main<h1>");
});

app.get('*', (req, res)=>{
    console.log(req.query);
    res.send(req.query)
});

app.listen(52273, ()=>{
    console.log("server is starting at http://localhost:52273");
});