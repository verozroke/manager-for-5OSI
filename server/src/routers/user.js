const register = require("../handlers/user/register");
const login = require("../handlers/user/login");
const proposal = require("../handlers/user/proposal");
const verify = require("../utils/verify");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/proposal", verify, proposal)

module.exports = router;
