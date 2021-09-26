require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL)
  .then(()=>{ console.log('DB Connected!')})
  .catch( err => console.log( err ))

module.exports = mongoose