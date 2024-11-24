//DESC Register new user
//ROUTES POST/API/users
//ACCESS Public

const registerUser = (req,res) => {
    res.json ({ message : 'Register User'})
}
//DESC Authenticate new user
//ROUTES POST/API/users/login
//ACCESS Public

const loginUser = (req,res) => {
    res.json ({ message : 'Login User'})
}
//DESC get user data
//ROUTES GET/API/users/me
//ACCESS Public

const getMe = (req,res) => {
    res.json ({ message : 'User data'})
}
  
 
module.exports = {
    registerUser,
    loginUser,
    getMe
    
} 