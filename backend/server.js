const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes middleware
app.use("/api/users", userRoutes);

//Routes
app.get('/', (req, res)=>{
    res.send('This is the response')
})

//Error Middleware
app.use(errorHandler);
//Connect to DB and start server
mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running at port ${PORT}`);
    })
})
.catch((err)=>console.log(err));

