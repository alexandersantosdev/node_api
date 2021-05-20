const express = require('express')
const app = express()
const connection = require('./models/db')

const routes = require('./routes')

const cors = require('cors')

app.use(express.json())
app.use(routes)
app.use(cors())

const port = process.env.PORT || 3000
app.listen(port, console.log(`Running on http://localhost:${port}`))