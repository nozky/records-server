const mongoose = require('mongoose')

const passcodeSchema = mongoose.Schema({
  passcode: String
},{timestamps: true})

module.exports = mongoose.model("passcode", passcodeSchema)