const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const mongoose = require('./connection/connect')

const record = require('./route/record')
const login = require('./route/login')

app.get('/test',(req,res) => {  res.json({status: true, msg: "connected!"})})
app.use('/api', record)
app.use('/login',login)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Listening on Port ${PORT}`))