const getCities = require("../handlers/city/cities");

const router = require("express").Router();

router.get("/cities", getCities);


module.exports = router;
