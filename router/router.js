const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/middleware.js')
const User = require('../model/model.js')

const {Signup, Signin} = require('../controller/controller.js')

router.post('/signup', Signup)
router.post('/signin', Signin)
router.get('/landing', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    if (!user) {
      return res.json({ success: false, message: 'User not found' })
    }
    return res.json({ success: true, user })
  } catch (error) {
    return res.json({ success: false, error: `Something went wrong: ${error}` })
  }
})

module.exports = router