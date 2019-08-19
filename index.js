const express = require('express')
const app = express()
const expressGraphQL = require("express-graphql")
const cors = require("cors")
const dotenv = require('dotenv').config()
import schema from "./api/graphql/"

const port = process.env.PORT || 5000

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

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
