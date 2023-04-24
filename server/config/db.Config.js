const mongoose = require("mongoose")
mongoose.connect(process.env.mongo_url)

//connection string
const connection = mongoose.connection

connection.on('connection', () => {
    console.log('MongoDB Connected Successfully')
})

connection.on('error', (err) => {
    console.log('MongoDB Connection error: ', err)
})


module.exports = mongoose