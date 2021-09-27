const jwt = require('jsonwebtoken')

const verityToken =(req, res, next)=>{
  
  const token = req.query.token || req.body.token || null

  if(!token) {
    res.status(403) 
  }
  jwt.verify(token, process.env.SECRET_KEY,(err, doc)=>{
    if(doc){
      next()
    }else{
      res.json({status: false, msg: err})
    }
  })
}

module.exports = verityToken

