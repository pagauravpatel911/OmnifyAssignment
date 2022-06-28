const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        required: true,
        enum: ['Mr', 'Mrs', 'Miss']
    },

    firstName: {
        type: String,
        required: true,
        trim: true
    },
    
    lastName: {
        type: String,
        required: true,
        trim: true
    },

    phone: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 15,
        trim: true
    },

    
}, { timestamps: true })

module.exports = mongoose.model('newUser', UserSchema)