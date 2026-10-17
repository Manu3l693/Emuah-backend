const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongoose = require('mongoose')
const dotenv = require('dotenv')

const testimonyModel = require ('./model/testimonyModel')

dotenv.config()

const testimony = [

    {id: 1, name: 'Jane Doe', image: 'images.jpg', course: 'Marketing Graduate',    testimony: '"This platform transformed my learning experience. The personalized courses and expert tutoring helped me gain the skills I needed to excel in my career. The supportive community and flexible scheduling made it easy to balance my studies with my job."',  type: 'testimony'},
    {id: 2, name: 'Jane Doe', image: '', course: 'Marketing Graduate',    testimony: '"This platform transformed my learning experience. The personalized courses and expert tutoring helped me gain the skills I needed to excel in my career. The supportive community and flexible scheduling made it easy to balance my studies with my job."',  type: 'testimony'},
    {id: 3, name: 'Jane Doe', image: '', course: 'Marketing Graduate',    testimony: '"This platform transformed my learning experience. The personalized courses and expert tutoring helped me gain the skills I needed to excel in my career. The supportive community and flexible scheduling made it easy to balance my studies with my job."',  type: 'testimony'},
    
];


mongoose.connect(process.env.MONGO_URL).then(async () => {
    await testimonyModel.deleteMany();
    await testimonyModel.insertMany(testimony);
    console.log('Testimony added!');
    process.exit();

});