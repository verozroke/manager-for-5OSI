const Rescom = require("../../models/rescom");

const getRescoms = async (req, res) => {
    Rescom.find({})
        .then(function(rescoms) { 
            res.send(rescoms)
        });
}

module.exports = getRescoms