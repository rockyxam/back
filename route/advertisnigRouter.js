const Router = require('express')
const router = new Router()
const advertisingController = require('../controller/advertisingController')

router.post('/', advertisingController.create)
router.get('/', advertisingController.getAll)

module.exports = router