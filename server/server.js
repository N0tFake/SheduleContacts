const express = require('express')
const { appendFile } = require('fs')
const routes = require('./routes')

require('./database/index')

const app = express()

app.use(express.json())
app.use(routes)

app.get('/', (req, res) => res.send("API"))

app.listen(3333)