const router = require("express").Router(),
  content = require("./content.controller")

router.post("/new", content.new)
router.get("/:id", content.list)
router.post("/", content.result)

module.exports = router
