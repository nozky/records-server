const mongoose = require('mongoose')

const personShema = mongoose.Schema({
  name: String,
  info: String
},{ timestamps: true})


module.exports = mongoose.model("person", personShema)