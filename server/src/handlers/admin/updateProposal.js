const { ObjectId } = require('mongodb');
const Proposal = require('../../models/proposal')


const updateProposal = async (req, res) => {
    const proposalId = parseInt(req.params.proposalId)
    const newObject = req.body; // new Proposal that were sent by axios put and passed as params
    try {
        const proposal = await Proposal.findByIdAndUpdate(
            {_id: new ObjectId(proposalId)},
            newObject,
            { new: true } // return the updated user object
        );
        res.json(proposal);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = updateProposal;

