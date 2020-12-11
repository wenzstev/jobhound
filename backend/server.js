const express = require('express')

const cors = require("cors")

var app = express()
app.use(cors())


app.get('/', (req, res)=>res.json("Hello frontend!"));

app.listen(5000)