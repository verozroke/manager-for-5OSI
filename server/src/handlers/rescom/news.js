const { ObjectId } = require('mongodb');
const Rescom = require('../../models/rescom')


const getNews = async (req, res) => {
    const rescomId = req.params.rescomId
    console.log('anal', rescomId)
    const query = {_id: new ObjectId(rescomId)}
    
    const projection = 'news'
    const data = await Rescom.findOne(query, projection).exec()
    res.send(data)    
}

module.exports = getNews;
