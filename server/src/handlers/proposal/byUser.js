
const { ObjectId } = require('mongodb');
const Proposal = require('../../models/proposal')

const getProposalByRescom = async (req, res) => {
    const userId = parseInt(req.params.userId)
    const query = {user_id: new ObjectId(userId)}
    const data = await Proposal.find(query).exec()
    res.send(data)
}

module.exports = getProposalByRescom
