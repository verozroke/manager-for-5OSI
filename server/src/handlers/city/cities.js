
const City = require("../../models/city");

const getCities = async (req, res) => {
    City.find({})
        .then(function(cities) { 
            res.send(cities)
        });
}


module.exports = getCities