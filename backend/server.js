const express = require('express')

var app = express()

app.get('/', (req, res)=>res.json("Hello frontend!"));

app.listen(5000)