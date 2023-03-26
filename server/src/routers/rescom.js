const getContacts = require("../handlers/rescom/contacts");
const getNews = require("../handlers/rescom/news");
const rescom = require("../handlers/rescom/rescom")
const rescoms = require("../handlers/rescom/rescoms")
const router = require("express").Router();

router.get("/contacts/:rescomId", getContacts);
router.get("/news/:rescomId", getNews);
router.get('/rescom/:rescomId', rescom)
router.get('/rescoms', rescoms)


module.exports = router;
