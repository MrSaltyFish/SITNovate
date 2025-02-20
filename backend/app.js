const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes.js');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
 
app.use(cors());



connectToDb();

app.use(express.json()); // Parses JSON request body
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data (e.g., form submissions)
app.use(cookieParser());



app.get('/', (req,res) => {
    res.send('Hello World');
});


app.use('/users', userRoutes);                 

module.exports = app;