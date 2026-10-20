const express = require('express')
const router = express.Router()

const Course = require('../model/courseModel')

router.get('/exploreCourses', async (req, res) => {
    try {
        const course = await Course.find({type: 'button'})
        res.json({success: true, course: course})
        console.log(course)
    } catch (error) {
        res.json(error)
    }
})

router.get('/popularCourses', async (req, res) => {
    try {
        const course = await Course.find({type:'popularCourses'})
        res.json({success: true, course: course})
    } catch (error) {
        res.json({course: error})
    }
})

router.get('/topRated', async (req, res) => {
    try {
        const course = await Course.find({type:'topRated'})
        res.json({success: true, course: course})
    } catch (error) {
        res.json({course: error})
    }
})

router.get('/certificationCourse', async (req, res) => {
    try {
        const course = await Course.find({type:'certificateCourse'})
        res.json({success: true, course: course})
    } catch (error) {
        res.json({course: error})
    }
})

router.get('/newCourse', async (req, res) => {
    try {
        const course = await Course.find({type:'newCourse'})
        res.json({success: true, course: course})
    } catch (error) {
        res.json({course: error})
    }
})

router.get('/searchedCourses', async (req, res) => {
    try {
        const course = await Course.find({type: 'search'})
        res.json({success: true, course: course})
    } catch (error) {
        res.json({success: false, course: error})
    }
})

router.get('/browseSubject', async (req, res) => {
    try {
        const course = await Course.find({type: 'subject'})
        res.json({success: true, course: course})
    } catch (error) {
        res.json(error)
    }
})



module.exports = router