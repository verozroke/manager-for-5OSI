const register = require("../handlers/user/register");
const login = require("../handlers/user/login");
const avatar = require("../handlers/user/avatar");
const verify = require("../utils/verify");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/avatar", verify, uploader.single("avatar"), avatar);

module.exports = router;
