const { ObjectId } = require('mongodb');
const Rescom = require('../../models/rescom')


const getRescom = async (req, res) => {
    const rescomId = req.params.rescomId
    console.log(rescomId)
    const query = {_id: new ObjectId(rescomId)}
    const data = await Rescom.findOne(query).exec()
    res.send(data)    
}

module.exports = getRescom;
