const mongoose = require ('mongoose')

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String
  }
}, {timestamps: true})

const Location = mongoose.model('location', locationSchema)

module.exports = Location