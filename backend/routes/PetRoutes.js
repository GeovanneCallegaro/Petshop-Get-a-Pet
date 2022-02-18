const router = require('express').Router()

const PetController = require('../controllers/PetController')

// middlewares
const checkToken = require('../helpers/verify-token')

router.post('/create', checkToken, PetController.create)

module.exports = router
