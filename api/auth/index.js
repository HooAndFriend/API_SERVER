const router = require("express").Router(),
  auth = require("./auth.controller")

router.post("/login", auth.login)
router.post("/register", auth.register)
// router.get("/jwt", auth.jwt)

module.exports = router
