const express = require('express')
const login = express.Router()
const jwt = require('jsonwebtoken')
const Passcode = require('../models/passcode')

const createToken =( req, res, next )=>{
  const { passcode } = req.body
  
  Passcode.findOne({passcode: passcode},(err, doc)=>{
    if( err ){
      res.json({status: false, msg: err})
    }else{
      if(doc){
        req.token = jwt.sign(passcode, process.env.SECRET_KEY)
        next()
      }else{
        res.json({status: false, msg: "Invalid code!"})
      }
    }
  })

}

login.post('/',createToken, (req,res)=>{
  res.json({status: true, msg: "success", token: req.token})
})

module.exports = login