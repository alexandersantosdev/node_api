const mongoose = require('mongoose')
const {DB_NAME, DB_PASS, DB_USER} = require('./db_auth')

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.os5ss.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

const connection = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(
    console.log('Connected to database')
)
.catch(
    e => console.log(`Error traying to connect to database: ${e}`)
)

module.exports = connection