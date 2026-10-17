const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors')
const path = require('path')
const connectDB = require('./connect/connect.js');
const coursesDatabase = require('./connect/coursesDatabase.js')
const testimonyDatabase = require('./connect/testimony.js')
const router = require('./router/router.js');
const courseRouter = require('./router/courseRouter.js')
const testimonyRouter = require('./router/testimonyRouter.js')

dotenv.config()

const app = express()
app.use(express.json())

app.use(cors({
  origin: 'http://localhost:8081', 
  // methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  // allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/api/auth', router)
app.use('/api/explore', courseRouter)
app.use('/api/testimony', testimonyRouter)



const PORT = process.env.PORT || 5000

app.listen(PORT, '0.0.0.0', () => {
    connectDB()
    coursesDatabase()
    testimonyDatabase()
    console.log(`Server running at port ${PORT}`);
})