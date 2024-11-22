const express = require('express')
const router = express.Router()
const{setGoals} = require('../controller/goalController')
const{getGoals} = require('../controller/goalController')
const{updateGoals} = require('../controller/goalController')
const{deleteGoals} = require('../controller/goalController')
 
router.get('/', getGoals)

router.post('/', setGoals)

router.put('/:id', updateGoals)

router.delete('/:id', deleteGoals)


module.exports = router 