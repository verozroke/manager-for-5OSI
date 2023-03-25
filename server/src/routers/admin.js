const updateNews = require("../handlers/admin/updateNews");
const updateProposal = require("../handlers/admin/updateProposal");

const router = require("express").Router();

router.put("/proposal/:proposalId", updateProposal);
router.put("/news/:rescomId", updateNews);



module.exports = router;
