const express = require('express');
const t9 = require('./t9-service');

const app = express()

app.get('/', (req, res) => { 
    let input = req.param('input');
    let txt = t9.getTextonyms(input);
    res.send(txt);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))