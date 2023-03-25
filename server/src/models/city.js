const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    id: {
        type: [mongoose.Types.ObjectId],
        ref: 'City',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("City", citySchema);
