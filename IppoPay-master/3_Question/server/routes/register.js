const express = require("express");
const register = require('../controller/auth.js')
const login = require("../controller/login.js")

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;