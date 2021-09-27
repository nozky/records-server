const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('./connection/connect')

app.use(cors())
app.use(express.json())

// trying ways to pass/recieve data through req/res obj, i know there is standard but i am hacking.. :) 
const record = require('./route/record')
const login = require('./route/login')
const log = require('./route/log')

app.get('/test',(req,res) => {  res.json({status: true, msg: "connected!"})})
app.use('/api', record)
app.use('/login',login)
app.use('/log',log)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Listening on Port ${PORT}`))