const getContacts = require("../handlers/rescom/contacts");
const getNews = require("../handlers/rescom/news");

const router = require("express").Router();

router.get("/contacts/:rescomId", getContacts);
router.get("/news/:rescomId", getNews);


module.exports = router;
