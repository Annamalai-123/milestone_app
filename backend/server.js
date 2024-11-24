require('dotenv').config();  // Load environment variables at the very top
const express = require('express');
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware for parsing JSON and urlencoded data
app.use(express.json());  // use this middleware for using console.log req.body in setgoals with
app.use(express.urlencoded({ extended: false })); //postman checking text,1st goal

// Routes
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`.cyan.underline);
});
