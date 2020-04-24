const express = require('express');

const app = express();

app.get('/profile', (req, res) =>{
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user);
})
app.get('/', (req, res) =>{
    res.send("getting profile");
})
app.post('/profile', (req, res) =>{
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send(user);
})
app.listen(3000);