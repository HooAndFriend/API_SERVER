const mysql = require("mysql"),
  router = require("express").Router(),
  auth = require("./auth/index"),
  content = require("./content/index"),
  middleware = require("./middlewares")

router.get("/", (req, res) => {
  res.send("API SERVER ON!")
})

router.use("/auth", auth)
router.use("/content", content)

module.exports = router
