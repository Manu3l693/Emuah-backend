const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

const CoursesData = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log('courseDatabase connected successfully:',)
    } catch (error) {
        console.error('Something went wrong:', error)
    }
}

module.exports = CoursesData