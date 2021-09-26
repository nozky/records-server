const express = require('express')
const record = express.Router()
const Person = require('../models/person')
const verifyToken = require('../helpers/verifyToken')

record.get('/all', verifyToken, (req, res) => {
  Person.find({}, (err, doc) => {
    if( err ){
      res.json({status: false, msg: err})
    }else{
      res.json({status: true, msg: doc })
    }
  })
})

record.get('/find', verifyToken, (req, res) => {
  const {name} = req.query
  const regEx = new RegExp( name, 'gi' )
  Person.find({name: regEx},(err,doc)=>{
    if(err){
      res.json({status: false, msg: err})
    }else{
      res.json({status: true, msg: doc})
    }
  })
})

record.post('/add',verifyToken,( req, res ) => {
  const {name, info} = req.body
  const newPerson = new Person({
    name: name,
    info: info
  })
  
  newPerson.save(err => {
    if( err ){
      res.json({status: false, msg: err})
    }else{
      res.json({status: true, msg: "saved!"})
    }
  })
   
})

record.post('/remove',verifyToken,(req,res)=>{
  const { id } = req.body
  Person.deleteOne({_id: id},(err, doc)=>{
    if(err){
      res.json({status: false, msg: doc})
    }else{
      res.json({status: true, msg: doc })
    }
  })
})

module.exports = record