const validateAdmin = require("../../validators/admin");
const { ObjectId } = require('mongodb'); // NOT МАНГУСТ
const Admin = require("../../models/admin");
const argon2 = require("argon2");

const register = async (req, res) => {
  // const { error } = validateUser(req.body);
  const error = false
  if (error) {
    return res.json({
      success: false,
      message: error.details[0].message,
    });
  }
  const hashedPassword = await argon2.hash(req.body.password);
  const exists = await Admin.findOne({ login: req.body.login });
  if (exists) {
    return res.json({
      success: false,
      message: "Admin exists",
    });
  }
  const admin = new Admin({
    login: req.body.login,
    password: hashedPassword,
    rescom_id: new ObjectId(req.body.rescom_id),
  });
  const saved = await admin.save();
  return res.json({
    success: true,
    admin: saved,
  });
};

module.exports = register;