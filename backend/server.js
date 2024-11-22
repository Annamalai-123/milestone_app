//npm run server check package.json
const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler}= require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())  // use this middleware for using console.log req.body in setgoals with
app.use(express.urlencoded({extended:false})) // postman checking text ,1st goal

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)

app.listen(port,()=> console.log(`server strarted on port ${port}`) )