import mongoose from 'mongoose'
import deleteStudent from './deleteStudent.js'

//TODO
mongoose.connect('mongodb://localhost:27017/FormativeLife')
    .then(() => {
        try {
            deleteStudent('663dfd82fe9f442a3e1d1e6c')
                .then(() => console.log('user deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })