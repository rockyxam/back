const Advertising = require('../model/advertising')

class AdvertisingController {
    async create(req, res) {
        const advertising = await Advertising.create(req.body)
        return res.json(advertising)
    }

    async getAll(req, res) {
        const advertising = await Advertising.find();

        console.log(advertising)

        return res.json(advertising)
    }

}

module.exports = new AdvertisingController()