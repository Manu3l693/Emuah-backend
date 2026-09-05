const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express')
const connectDB = require('./connect/connect.js')



const app = express()


const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    connectDB()
    console.log(`Server running at Port ${PORT}`);
})