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
    lastLoggedIn: {
        type: Date,
        default: Date.now()
    },
    isVerified: {
        type: Boolean,
    },
    passwordResetToken: String,
    passwordResetTokenExpiresAt: Date
}, {timestamps: true})


const User = mongoose.model('userdata', userSchema)

module.exports = User