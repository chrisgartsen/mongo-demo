const mongoose = require('mongoose')

const connect = async () => {
  try {
    mongoose.connect('mongodb://localhost/mongo-demo', {useNewUrlParser: true})

  } catch(error) {
    console.log('Error while connecting to mongoose')
    console.log(error)
  }
}

connect()


/* 

  One location has multiple customers, one customer always belongs to one location

  A customer can have multiple menus, menus are shared by customers

 */