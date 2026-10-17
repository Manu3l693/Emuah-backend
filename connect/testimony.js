const mongoose = require('mongoose')

const dotenv = require('dotenv')

dotenv.config()

const testimonyDatabase = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log('Testimony database connected successfully!');
    } catch (error) {
        console.log('Something went wrong:', error);
    }
}

module.exports = testimonyDatabase