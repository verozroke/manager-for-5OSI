const register = require("../handlers/user/register");
const login = require("../handlers/user/login");
const proposal = require("../handlers/user/proposal");
const getUser = require("../handlers/user/getUser");
const verify = require("../utils/verify");
const Rescom = require("../models/rescom")
const { ObjectId } = require("mongodb")

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/proposal", [verify, proposal])
router.get('/', [verify, getUser])
router.post("/rescom", async function (req, res) {
    const rescom = new Rescom({
        name: req.body.name,
        contacts: req.body.contacts,
        news: req.body.news,
        city_id: new ObjectId(req.body.city_id),
    }) 
    const saved = await rescom.save();
    return res.json({
        success: true,
        user: saved,
    });
})

module.exports = router;
