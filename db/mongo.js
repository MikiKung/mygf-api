const mongoose = require('mongoose')

let uri = 'mongodb+srv://nut345:nut345@cluster0.qlph3.mongodb.net/mygf'

mongoose.connect(uri)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))
// console.log(db.once)
db.once('open', () => console.log('database ok'))


module.exports = db
