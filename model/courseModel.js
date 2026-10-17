const mongoose = require('mongoose')


const courseData = new mongoose.Schema({
    id: {
        type: Number
    },

    courseTitle: {
        type: String
    },

    type: {
        type: String
    },

    subject: {
        type: String
    },

   
})


const Course = mongoose.model('courseData', courseData)

module.exports = Course