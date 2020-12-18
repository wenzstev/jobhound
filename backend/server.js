const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')

require('dotenv').config()

var app = express()

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true})
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB connection established successfully.")
})


app.get('/', (req, res)=>res.json("Hello frontend!"));

app.listen(5000)