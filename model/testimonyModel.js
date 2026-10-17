const mongoose = require('mongoose')

const testimonySchema = new mongoose.Schema({
    id: {
        type: Number
    },

    name: {
        type: String
    },

    image: {
        type: String
    },

    course: {
        type: String
    },
    
    testimony: {
        type: String
    },

    type: {
        type: String
    }
})

const testimony = mongoose.model('testimony', testimonySchema)

module.exports = testimony