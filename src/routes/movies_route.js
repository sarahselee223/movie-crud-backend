const express = require('express')
const router = express.Router()
const movieController = require('../controls/movies_control.js')

router.get('/', movieController.getAll)

router.get('/:movieId', movieController.getOne)

router.post('/', movieController.create)

router.put('/:movieId', movieController.editOne)

router.delete('/:movieId', movieController.deleteOne)

module.exports = router