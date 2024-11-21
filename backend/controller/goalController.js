//DESC  GET GOALS
//ROUTES GET/API/GOALS
//ACCESS PRIVATE 

const getGoals = (req,res)=>{
    res.status(200).json({message: 'Get goals'})  
}

//DESC SET OR POST GOALS
//ROUTES POST/API/GOALS
//ACCESS PRIVATE
    
const setGoals = (req,res)=>{
    console.log(req.body)
    res.status(200).json({message : 'set goals'})  
}

//DESC UPDATE GOALS
//ROUTES POST/API/GOALS/:id
//ACCESS PRIVATE

const updateGoals = (req,res)=>{
    res.status(200).json({message : `update goals ${req.params.id}`})}


//DESC DELETE GOALS
//ROUTES POST/API/GOALS/id
//ACCESS PRIVATE

const deleteGoals = (req,res)=>{
    res.status(200).json({message : `delete goals ${req.params.id}`})}


module.exports = {
getGoals,
setGoals,
updateGoals,
deleteGoals
}