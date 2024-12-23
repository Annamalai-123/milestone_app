const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')



//DESC Register new user
//ROUTES POST/API/users
//ACCESS Public

const registerUser = asyncHandler(async(req,res) => {
const {name,email,password}= req.body

if(!name || !email || !password){
    res.status(400) 
    throw new Error('please add all fields')
}
   
  //check if user is exists
  const userExists = await User.findOne({email})

  if(userExists){
    res.status(400)
    throw new Error('User is already exists')
  }

  //hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password,salt)

  //create a user
  const user = await User.create({
    name,
    email,
    password : hashedPassword
  })

if(user){
    res.status(201).json({
        _id:user.id,
        name:user.name,
        email:user.email
    })
} else {
    res.status(400)
    throw new Error('invalid user data ')
}



    res.json ({ message : 'Register User'})
})
//DESC Authenticate new user
//ROUTES POST/API/users/login
//ACCESS Public

const loginUser = asyncHandler(async(req,res) => {

const {email,password}= req.body
 //check for user email
const user = await User.findOne({email})


if(user && (await bcrypt.compare(password,user.password))){
    res.json({
        _id:user.id,
        name:user.name,
        email:user.email,
        token:generateToken(user._id),
    })
} else {
    res.status(400)
    throw new Error('invalid credentials')
}

    // res.json ({ message : 'Login User'})
})

//DESC get user data
//ROUTES GET/API/users/me
//ACCESS Private

const getMe = asyncHandler(async(req,res) => { //get me updated
    
 res.status(200).json(req.user)
})
  
 
//Generate JWT token
const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}


module.exports = {
    registerUser,
    loginUser,
    getMe
    
} 