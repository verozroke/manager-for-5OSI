const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    id: {
        type: [mongoose.Types.ObjectId],
        ref: 'Admin',
        required: true,
    },
    login: {
        type: String,
        required: true,
    },
    password: {
        type: Number,
        required: true,
    },
    rescom_id: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Admin", adminSchema);
