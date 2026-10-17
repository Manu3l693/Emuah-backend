const express = require('express')
const router = express.Router()

const Testimony = require('../model/testimonyModel')

router.get('/testimonies', async (req, res) => {
    try {
        const testimony = await Testimony.find({type: 'testimony'})
        res.json({success: true, testimony: testimony})
        console.log(testimony)
    } catch (error) {
        res.json(error)
    }
})

module.exports = router