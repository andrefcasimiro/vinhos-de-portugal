const express = require('express')
const app = express()
const expressGraphQL = require("express-graphql")
const dotenv = require('dotenv').config()
import schema from "./api/graphql/"

const port = process.env.PORT || 5000

app.use("/graphql",
  expressGraphQL(request => {
    return {
      schema,
      graphiql: true,
    }
  }),
)

app.get('*', (req, res) => {
  res.send(`Hello! This is a wine app.`)
})

app.listen(port, () => {
  console.log(`Server listening on ${port}`)
})
