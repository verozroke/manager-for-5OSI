const register = require("../handlers/user/register");
const login = require("../handlers/user/login");
const proposal = require("../handlers/user/proposal");
const getUser = require("../handlers/user/getUser");
const verify = require("../utils/verify");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/proposal", [verify, proposal])
router.get('/', [verify, getUser])

module.exports = router;
