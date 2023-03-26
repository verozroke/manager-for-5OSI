const { ObjectId } = require('mongodb');
const City = require('../../models/city')


const getCity = async (req, res) => {
    const cityId = req.params.cityId
    console.log('sosi bibu', cityId)
    const query = {_id: new ObjectId(cityId)}
    const projection = 'name'
    const data = await City.findOne(query, projection).exec()
    res.send(data)    
}

module.exports = getCity;
