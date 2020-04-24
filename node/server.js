const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    //res.send("hello");
    res.send("<h1>hellllloooo</h1>");
})
app.listen(3000);