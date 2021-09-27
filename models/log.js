const mongoose = require('mongoose')

const logSchema = mongoose.Schema({
  log: String
},{timestamps: true})

module.exports = mongoose.model('log',logSchema )