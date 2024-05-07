import mongoose from 'mongoose'
import registerStudent from './registerStudent.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            registerStudent('pepito', 'grillo', 'pepito@grillo.com', '123123123')
                .then(() => console.log('student registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))