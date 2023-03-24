const User = require("../../models/user");

const avatar = async (req, res) => {
  if (!req.file) {
    return res.json({
      success: false,
      message: "No file",
    });
  }
  const user = await User.findByIdAndUpdate(
    req.user.id,
    {
      avatar: req.file.filename,
    },
    {
      new: true,
    }
  );
  return res.json({
    success: true,
    user,
  });
};

module.exports = avatar;
