const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  vegetarian: {
    type: Boolean,
    default: false
  },
  lactoseFree: {
    type: Boolean,
    default: false
  },
  calories: {
    type: Number
  }
})

const Menu = mongoose.model('menu', menuSchema)

module.exports = Menu