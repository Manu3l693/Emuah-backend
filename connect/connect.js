const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()


const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database connected successfully ${connect}`) 
    } catch (error) {
        console.error('Something went wrong:', error);
        
    }
}


module.exports = connectDB