module.exports = {
    getHouses: (req, res, next) => {
        req.app.get('db').get_houses()
        .then(house => res.status(200).send(house))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    },

    addHouse: (req, res, next) => {
        const { name, address, city, state, zip } = req.body;

        req.app.get('db').create_house([name, address, city, state, zip])
        .then(house => res.status(200).send(house))
        .catch(err => res.status(500).send({errorMessage: 'Error!'}, console.log(err)))
    }
}