const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.get('/', (req, res)=>{
    res.send('This is the response')
})

mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running at port ${PORT}`);
    })
})
.catch((err)=>console.log(err));

