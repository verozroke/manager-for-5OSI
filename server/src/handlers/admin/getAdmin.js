const getAdmin = async (req, res) => {
    res.send(req.admin)
  }
module.exports = getAdmin;