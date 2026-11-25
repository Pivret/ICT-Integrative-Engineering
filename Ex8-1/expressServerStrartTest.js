const express = require('express');

const app = express();

app.use((request, response)=>{
    response.send("<h1>hi<h1>");
});

app.listen(52273, ()=>{
    console.log("server is starting at http://localhost:52273");
});