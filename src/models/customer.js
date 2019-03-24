const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'location'
  }
}, {timestamps: true})

const Location = mongoose.model('customer', customerSchema)

module.exports = Location