
const { ObjectId } = require('mongodb');
const Proposal = require('../../models/proposal')

const getProposalByUser = async (req, res) => {
    const userId = req.params.userId
    console.log('sexual harassment', userId)
    const query = {user_id: new ObjectId(userId)}
    const data = await Proposal.find(query).exec()
    res.send(data)
}

module.exports = getProposalByUser
