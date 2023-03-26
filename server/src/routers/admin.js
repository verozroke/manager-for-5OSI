const getAdmin = require("../handlers/admin/getAdmin");
const login = require("../handlers/admin/login");
const updateNews = require("../handlers/admin/updateNews");
const updateProposal = require("../handlers/admin/updateProposal");
const verify = require("../utils/adminVerify");
const register = require("../handlers/admin/register")

const router = require("express").Router();

router.put("/proposal/:proposalId", updateProposal);
router.put("/news/:rescomId", updateNews);
router.post("/login", login);
router.get('/', [verify, getAdmin])
router.post("/register", register);



module.exports = router;
