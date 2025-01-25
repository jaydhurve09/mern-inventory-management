const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name."]
    },

    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        trim: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Please enter a valid email."]
    },

    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [6, "Password length must be at least 6 characters"],
        maxLength: [23, "Password length must not be more than 23 characters"],
    },

    photo: {
        type: String,
        required: [true, "Please add a photo"],
        default: ""
    },

    phone: {
        type: String,
        default: "+91"
    },

    bio: {
        type: String,
        maxLength: [250, "Bio must not be more than 250 characters"],
        default: "bio"
    }
}, {timestamps:true})

const User = mongoose.model("User", userSchema);
moduel.exports = User;