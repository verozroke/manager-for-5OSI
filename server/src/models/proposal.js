const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema({
    id: {
        type: [mongoose.Types.ObjectId],
        ref: 'Proposal',
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    currentStatus: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    user_id: {
        type: [mongoose.Types.ObjectId],
        ref: 'Proposal',
        required: true,
    },
    rescom_id: {
        type: [mongoose.Types.ObjectId],
        ref: 'Proposal',
        required: true,
    }
});

module.exports = mongoose.model("Proposal", proposalSchema);
