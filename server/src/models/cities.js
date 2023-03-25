const mongoose = require("mongoose");

const citiesSchema = new mongoose.Schema({
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

module.exports = mongoose.model("City", citiesSchema);
