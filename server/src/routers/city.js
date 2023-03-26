const getCities = require("../handlers/city/cities");
const city = require("../handlers/city/city")
const router = require("express").Router();

router.get("/cities", getCities);
router.get("/city/:cityId", city)

module.exports = router;
