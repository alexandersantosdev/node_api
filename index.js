const express = require('express')
const app = express()
require('./models/db')

const routes = require('./routes')

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(routes)


const port = process.env.PORT || 8080
app.listen(port, console.log(`Running on http://localhost:${port}`))