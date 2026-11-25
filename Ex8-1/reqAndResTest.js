const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res)=>{
    res.send("<h1>main<h1>");
});

app.get('/image', (req, res)=>{
    fs.readFile('IMG_135155.png', (error, data)=>{
        res.type('image/png');
        res.send(data);
    })
});

app.get('/audio', (req, res)=>{
    fs.readFile('audio.mp3', (error, data)=>{
        res.type('audio/mpeg');
        res.send(data);
    })
});

app.listen(52273, ()=>{
    console.log("server is starting at http://localhost:52273");
});