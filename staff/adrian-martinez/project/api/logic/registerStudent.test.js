import mongoose from 'mongoose'
import registerStudent from './registerStudent.js'

mongoose.connect('mongodb://localhost:27017/FormativeLife')
    .then(() => {
        try {
            registerStudent("Adrián","Martínez Insua",35,null,null,'adrianmi.info@gmail.com', '12345678')
                .then(() => console.log('User registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })