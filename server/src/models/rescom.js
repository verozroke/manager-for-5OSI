const mongoose = require("mongoose");

const rescomSchema = new mongoose.Schema({
    id: {
        type: [mongoose.Types.ObjectId],
        ref: 'Rescom',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    city_id: {
        type: [mongoose.Types.ObjectId],
        ref: 'Rescom',
        required: true,
    },
    contacts: {
        type: Array,
        required: true,
    },
    news: {
        type: Array,
        required: true,
    }
});

module.exports = mongoose.model("Rescom", rescomSchema);
