const express = require('express')
const bodyParser = require('body-parser')

const Location = require('./models/location')
const Customer = require('./models/customer')

require('./mongoose')

const app = express()

app.use(bodyParser.json())

app.get('/menus', (req, res) => {
  res.send("Endpoint for getting all menus.")
})

app.post('/menus', (req, res) => {
  res.send("Endpoint for creating a new menu.")
})

app.get('/customers', async (req, res) => {
  try {
    const customers = await Customer.find().populate('location').exec() 
    res.status(200).json(customers) 
  } catch(error) {
    res.status(500).json(error)
  }
})

app.post('/customers', async (req, res) => {
  try {
    const customer = new Customer({
      name: req.body.name,
      location: req.body.location
    })
    await customer.save()
    res.status(201).json(customer)
  } catch(error) {
    res.status(500).json(error)
  }
  res.send("Endpoint for creating a new customer.")
})

app.get('/locations', async (req, res) => {
  try {
    const locations = await Location.find()
    res.status(200).json(locations)
  } catch(error) {
    res.status(500).json(error)
  }
})

app.post('/locations', async (req, res) => {
  try {
    const location = new Location({
      name: req.body.name
    })
    await location.save()
    res.status(201).json(location)
  } catch(error) {
    res.status(500).json(error)
  }
})

app.listen(3000, () => {
  console.log("Server listening on port 3000...")
})