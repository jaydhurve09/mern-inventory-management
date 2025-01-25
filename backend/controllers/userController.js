const asyncHandler = require('express-async-handler')
// const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please fill all the required fields")
    }
    if(password.length<6){
        res.status(400)
        throw new Error("Password length must be at least 6 characters")
    }

    //Check if user email already exist
    const userExists = await user.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error("Email has already been registered")
    }

    //Create new user
    const user = await User.create({
        name, 
        email,
        password
    })

    if(user){
        const {_id, name, email, photo, phone, bio} = user
        res.status(201).json({
            _id, name, email, photo, phone, bio
        })
    }
});

module.exports = {
    registerUser,
}