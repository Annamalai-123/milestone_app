const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

//DESC  GET GOALS
//ROUTES GET/API/GOALS
//ACCESS PRIVATE 

const getGoals = asyncHandler(async(req,res)=>{
    const goals = await Goal.find({user: req.user.id})

    res.status(200).json(goals)  
})

//DESC SET OR POST GOALS
//ROUTES POST/API/GOALS
//ACCESS PRIVATE
    
const setGoals = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id                    //these added 
    })
 
    res.status(200).json(goal)  
})

//DESC UPDATE GOALS
//ROUTES POST/API/GOALS/:id
//ACCESS PRIVATE

const updateGoals = asyncHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }

    //jwt added code removed
   
    //check user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }
    
    //make sure the logged in user matches the goal user
    //added user by req
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorised')
    }


    const updateGoals = await Goal.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })


    res.status(200).json(updateGoals)
})


//DESC DELETE GOALS
//ROUTES POST/API/GOALS/id
//ACCESS PRIVATE
                                                        //before model
                                                        //all set,get,put,delete
                                                        // const deleteGoals = asyncHandler(async(req,res)=>{
                                                        //  res.status(200).json({message : `delete goals ${req.params.id}`})
                                                        //   })

const deleteGoals = asyncHandler(async(req,res)=>{  
    const goals =await Goal.findById(req.params.id)
    if(!goals){
        res.status(400)
        throw new Error ('Goal not found')
     }

    if(!req.user){
        res.status(401)
        throw new Error('user not found ')
    }
    if (goals.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('user not Authorised ')
    }
    await goals.deleteOne()
    res.status(200).json ({ id: req.params.id })
})

module.exports = { 
getGoals,
setGoals,
updateGoals,
deleteGoals,
}
//npm i express-async-handler installed for handling errors