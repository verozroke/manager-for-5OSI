const register = require("../handlers/user/register");
const login = require("../handlers/user/login");
const verify = require("../utils/verify");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
