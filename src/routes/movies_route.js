const express = require('express')
const router = express.Router()
const movieController = require('../controls/movies_control.js')

router.get('/', movieController.getAll)

router.get('/:id', movieController.getOne)

router.post('/', movieController.create)

router.put('/:id', movieController.editOne)

router.delete('/:id', movieController.deleteOne)

module.exports = router