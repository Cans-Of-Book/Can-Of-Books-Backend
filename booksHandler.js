const bookHandler = async (req, res) => {
    res.status(200).send([{img:'test'}]);
}

module.exports = bookHandler;