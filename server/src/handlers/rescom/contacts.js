const { ObjectId } = require('mongodb');
const Rescom = require('../../models/rescom')


const getContacts = async (req, res) => {
    const rescomId = req.params.rescomId
    const query = {_id: new ObjectId(rescomId)}
    const projection = 'contacts'
    const data = await Rescom.findOne(query, projection).exec()
    res.send(data)    
}

module.exports = getContacts;
