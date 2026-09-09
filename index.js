const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors')
const connectDB = require('./connect/connect.js');
const router = require('./router/router.js');

dotenv.config()

const app = express()
app.use(express.json())

app.use(cors({
  origin: 'http://localhost:8081', 
  // methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  // allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}))

app.use('/api/auth', router)


const PORT = process.env.PORT || 5000

app.listen(PORT, '0.0.0.0', () => {
    connectDB()
    console.log(`Server running at port ${PORT}`);
})