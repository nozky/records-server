const log = require('express').Router()
const jwt = require('jsonwebtoken')
const { get } = require('mongoose')
const Log = require('../models/log')

log.post('/', (req, res)=>{

  const token = req.headers.authorization.split(" ")[1]

  jwt.verify(token, process.env.SECRET_KEY,(err, doc)=>{
    if(doc){
      const newLog = new Log({
        log: req.body.log
      })

      newLog.save( (err, doc) => {
        if(err) res.json({status: false, msg: "Something went wrong!"})
        res.json({status: true, msg: doc})
      } )
    }else{
      res.json({status: false, msg: err})
    }
  })

})

log.get('/all',(req, res) =>{
  Log.find({},(err, doc) =>{
    res.json({status: true, msg: doc})
  })
})

module.exports = log