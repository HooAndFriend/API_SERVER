const router = require("express").Router(),
  content = require("./content.controller")

router.post("/new", content.new)
router.post("/", content.result)
router.post("/update", content.update)

module.exports = router
