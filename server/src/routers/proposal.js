const getProposalByUser = require("../handlers/proposal/byUser");
const getProposalByRescom = require("../handlers/proposal/byRescom");
const verify = require("../utils/verify");

const router = require("express").Router();

router.get("/byUser/:userId", getProposalByUser);
router.get("/byRescom/:rescomId", getProposalByRescom);


module.exports = router;
