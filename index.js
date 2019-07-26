const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000

app.get('*', (req, res) => {
  res.send(`Hello! This is a wine app.`)
})

app.listen(port, () => {
  console.log(`Server listening on ${port}`)
})
