const updateNews = require("../handlers/admin/updateNews");
const updateProposal = require("../handlers/admin/updateProposal");
const login  = require("../handlers/admin/login");

const router = require("express").Router();

router.put("/proposal/:proposalId", updateProposal);
router.put("/news/:rescomId", updateNews);
router.post("/login", login);



module.exports = router;
