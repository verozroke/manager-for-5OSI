const validateUser = require("../../validators/user");
const { ObjectId } = require('mongodb'); // NOT МАНГУСТ
const User = require("../../models/user");
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
  const exists = await User.findOne({ login: req.body.login });
  if (exists) {
    return res.json({
      success: false,
      message: "User exists",
    });
  }
  console.log(req.body.city_id)
  console.log(req.body.rescom_id)
  const user = new User({
    login: req.body.login,
    password: hashedPassword,
    name: req.body.name,
    city_id: new ObjectId(req.body.city_id),
    rescom_id: new ObjectId(req.body.rescom_id),
  });
  const saved = await user.save();
  return res.json({
    success: true,
    user: saved,
  });
};

module.exports = register;
