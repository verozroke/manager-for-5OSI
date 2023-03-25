const getProposalByUser = require("../handlers/proposal/byUser");
const getProposalByUser = require("../handlers/proposal/byRescom");
const verify = require("../utils/verify");

const router = require("express").Router();

router.get("/byUser/:userId", getProposalByUser);
router.get("/byRescom/:rescomId", getProposalByRescom);
// put запросы для обновления статуса и истории статуса пропоузала админом
module.exports = router;
