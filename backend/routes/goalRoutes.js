const express = require('express')
const router = express.Router()
// const{setGoals} = require('../controller/goalController')
// const{getGoals} = require('../controller/goalController')
// const{updateGoals} = require('../controller/goalController')
// const{deleteGoals} = require('../controller/goalController')

//the above comment is same as below

const {setGoals,getGoals,updateGoals,deleteGoals} = require('../controller/goalController')


const {protect} = require('../middleware/authMiddleware')

router.get('/',protect, getGoals)

router.post('/',protect, setGoals)

router.put('/:id',protect, updateGoals)

router.delete('/:id',protect, deleteGoals)


module.exports = router 