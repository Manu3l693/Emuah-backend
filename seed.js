const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongoose = require('mongoose')
const dotenv = require('dotenv')

const courseModel = require ('./model/courseModel')

dotenv.config()

const course = [

    {id: 1, name: 'Jane Doe', image: '', course: 'Marketing Graduate',    testimony: '"This platform transformed my learning experience. The personalized courses and expert tutoring helped me gain the skills I needed to excel in my career. The supportive community and flexible scheduling made it easy to balance my studies with my job."',      type: 'testimony'},
    {id: 2, name: 'Jane Doe', image: '', course: 'Marketing Graduate',    testimony: '"This platform transformed my learning experience. The personalized courses and expert tutoring helped me gain the skills I needed to excel in my career. The supportive community and flexible scheduling made it easy to balance my studies with my job."',        type: 'testimony'},
    {id: 3, name: 'Jane Doe', image: '', course: 'Marketing Graduate',    testimony: '"This platform transformed my learning experience. The personalized courses and expert tutoring helped me gain the skills I needed to excel in my career. The supportive community and flexible scheduling made it easy to balance my studies with my job."',            type: 'testimony'},
    



    {id: 1, courseTitle: 'Soft skill',      type: 'button'},
    {id: 2, courseTitle: 'Business',        type: 'button'},
    {id: 3, courseTitle: 'Arts',            type: 'button'},
    {id: 4, courseTitle: 'Technical skill', type: 'button'},

    {id: 5, courseTitle: 'Soft skillz', type: 'button'},
    {id: 6, courseTitle: 'Business',    type: 'button'},
    {id: 7, courseTitle: 'Arts',        type: 'button'},
    {id: 8, courseTitle: 'Science',     type: 'button'},



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