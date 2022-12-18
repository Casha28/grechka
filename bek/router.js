'use strict'

const ClientControler = require('./ClientController')
const Router = require('express')
const router = new Router()

router.post('/clients', ClientControler.create)
router.get('/clients', ClientControler.getAll)
router.get('/clients/:id', ClientControler.get)
router.put('/clients/:id', ClientControler.update)
router.delete('/clients/:id', ClientControler.delete)   

module.exports = router