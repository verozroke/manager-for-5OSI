const { ObjectId } = require('mongodb');
const Proposal = require('../../models/proposal')

const getProposalByRescom = async (req, res) => {
    const rescomId = parseInt(req.params.rescomId)
    const query = {rescom_id: new ObjectId(rescomId)}
    const data = await Proposal.find(query).exec()
    res.send(data)
}

module.exports = getProposalByRescom
