const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongoose = require('mongoose')
const dotenv = require('dotenv')

const courseModel = require ('./model/courseModel')

dotenv.config()

const course = [
    

    {id: 1, courseTitle: 'Soft skill',      type: 'button'},
    {id: 2, courseTitle: 'Business',        type: 'button'},
    {id: 3, courseTitle: 'Arts',            type: 'button'},
    {id: 4, courseTitle: 'Technical skill', type: 'button'},

    {id: 5, courseTitle: 'Soft skillz', type: 'button'},
    {id: 6, courseTitle: 'Business',    type: 'button'},
    {id: 7, courseTitle: 'Arts',        type: 'button'},
    {id: 8, courseTitle: 'Science',     type: 'button'},

    //popularCourses
    {id: 1, courseTitle: 'UI/UX Design Fundamentals',                   text: 'Intermediate',   image: 'ui_ux.png',                 type: 'popularCourses'},
    {id: 2, courseTitle: 'Getting Started with Python',                 text: 'Beginner',       image: 'gettingStatedPython.jpg',   type: 'popularCourses'},

    //topRatedCourses
    {id: 1, courseTitle: 'Introduction to Python Professional Course',  text: 'Course',         image: 'introToPython.jpg',     type: 'topRated'},
    {id: 2, courseTitle: 'UI/UX Design Principles',                     text: 'Course',         image: 'uiuxPrinciples.jpg',    type: 'topRated'},

    //certificateCourse
    {id: 1, courseTitle: 'Professional Graphic Design',                 text: 'Certificate',    image: 'professionalGrapicDesigner.jpg',    type: 'certificateCourse'},
    {id: 2, courseTitle: 'Digital Marketing',                           text: 'Certificate',    image: 'digitalMarketing.jpg',              type: 'certificateCourse'},

    //newCourse
    {id: 1, courseTitle: 'Introduction to Artificial Intelligence',     text: 'Course',         image: 'IntroToAI.jpg',     type: 'newCourse'},
    {id: 2, courseTitle: 'Advanced Healthcare Management',              text: 'Course',         image: 'AdvancedHM.jpg',    type: 'newCourse'},


    {id: 1, courseTitle: 'Figma',           type: 'search'},
    {id: 2, courseTitle: 'Product Design',  type: 'search'},
    {id: 3, courseTitle: 'Photoshop',       type: 'search'},
    {id: 4, courseTitle: 'Python',          type: 'search'},
    {id: 5, courseTitle: 'React',           type: 'search'},
    {id: 6, courseTitle: 'Framer',          type: 'search'},
    {id: 7, courseTitle: 'Excel',           type: 'search'},

    {id: 1, subject: 'Business',                type: 'subject'},
    {id: 2, subject: 'Design and Illustration', type: 'subject'},
    {id: 3, subject: 'Data Science',            type: 'subject'},
    {id: 4, subject: 'Marketing',               type: 'subject'},
    {id: 5, subject: 'Development',             type: 'subject'},
    {id: 6, subject: 'Office Productivity',     type: 'subject'},
    {id: 7, subject: 'Personal Development',    type: 'subject'},
    {id: 8, subject: 'Lifestyle',               type: 'subject'},
    {id: 9, subject: 'Teaching & Academics',    type: 'subject'},
    {id: 10, subject: 'Health & Fitness',       type: 'subject'},
    {id: 11, subject: 'Photography & Video',    type: 'subject'},
];


mongoose.connect(process.env.MONGO_URL).then(async () => {
    await courseModel.deleteMany();
    await courseModel.insertMany(course);
    console.log('Course added!');
    process.exit();

});