const { ObjectId } = require('mongodb');
const Rescom = require('../../models/rescom')


const updateNews = async (req, res) => {
    const rescomId  = parseInt(req.params.rescomId)
    const newObject = req.body; // new News that were sent by axios put and passed as params
    try {
        const rescom = await Rescom.findByIdAndUpdate(
            {_id: new ObjectId(rescomId)},
            newObject,
            { new: true } // return the updated user object
        );
        res.json(rescom);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = updateNews;


