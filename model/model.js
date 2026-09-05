const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        require: true
    }, 
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    lastLogin: {
        type: Date,
        default: Date.now()
    },
    verificationToken: String,
    verificationTokenExpiresAt: Date,
    passwordResetToken: String,
    passwordResetTokenExpiresAt: Date,   
}, {timestamps: true})

const User = mongoose.model('user', userSchema)

module.exports = User