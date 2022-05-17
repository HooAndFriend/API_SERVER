const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  api = require("./api/index"),
  cookieParser = require("cookie-parser"),
  cors = require("cors")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use("/api", api)

const port = 8001

app.listen(port, () => console.log(`SERVER ON! PORT : ${port}`))
