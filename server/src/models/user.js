const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: [mongoose.Types.ObjectId],
    ref: 'User',
    required: true,
  },
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  city_id: {
    type: [mongoose.Types.ObjectId],
    ref: 'User',
    required: true,
  },
  rescom_id: {
    type: [mongoose.Types.ObjectId],
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
