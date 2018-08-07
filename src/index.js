const express = require('express');
const t9 = require('./t9-service');
const t9Dict = require('./t9-dictionary');

const app = express()

app.get('/expand/:input', (req, res) => { 
    let input = req.param('input');
    let limit = parseInt(req.query.limit);
    let expansions = t9.getExpansions(input, limit);
    res.send(expansions);
});

app.get('/predict/:input', (req, res) => { 
    let input = req.params['input'];
    let limit = parseInt(req.query.limit);
    let textonyms = t9.getTextonyms(input, t9Dict, limit);
    res.send(textonyms);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))