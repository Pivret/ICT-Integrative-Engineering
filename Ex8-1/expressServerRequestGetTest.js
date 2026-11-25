const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("<h1>main<h1>");
});

app.get('/about', (req, res)=>{
    res.send("<h1>about<h1>");
});

app.listen(52273, ()=>{
    console.log("server is starting at http://localhost:52273");
});