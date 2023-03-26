const { ObjectId } = require('mongodb');
const Proposal = require("../../models/proposal");

const proposal = async (req, res) => {
    const error = false
    if (error) {
      return res.json({
        success: false,
        message: error.details[0].message,
      });
    }
    const prop = new Proposal({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        currentStatus: req.body.currentStatus,
        phoneNumber: req.body.phoneNumber,
        user_id: new ObjectId(req.body.user_id),
        statusHistory: req.body.statusHistory,
        rescom_id: new ObjectId(req.body.rescom_id),
    });
    const saved = await prop.save();
    return res.json({
      success: true,
      user: saved,
    });
  };

module.exports = proposal;