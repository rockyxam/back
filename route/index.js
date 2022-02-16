const Router = require('express')
const router = new Router()
const advertisingRouter = require('./advertisnigRouter')


router.use('/advertising', advertisingRouter)

module.exports = router