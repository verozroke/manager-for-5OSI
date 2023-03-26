const validateAdmin = require("../../validators/admin");
const Admin = require("../../models/admin");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");


const login = async (req, res) => {
  const { error } = validateAdmin(req.body);
  if (error) {
    return res.json({
      success: false,
      message: error.details[0].message,
    });
  }
  const admin = await Admin.findOne({ login: req.body.login });
  if (!admin) {
    return res.json({
      success: false,
      message: "login and password do not match",
    });
  }
  const verifyPass = await argon2.verify(admin.password, req.body.password);
  if (!verifyPass) {
    return res.json({
      success: false,
      message: "login and password do not match",
    });
  }
  const token = jwt.sign(
    {
      id: admin._id,
      login: admin.login,
      rescom_id: admin.rescom_id
    },
    process.env.SECRET, {expiresIn: "12h"}
  );
  return res.json({
    success: true,
    token,
    admin,
  });
};

module.exports = login;