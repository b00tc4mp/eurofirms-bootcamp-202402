import mongoose from 'mongoose'
import registerUser from './registerUser.js'

mongoose.connect('mongodb://localhost:27017/project')
.then(()=> {
    try {registerUser( 'Tomas', 'Moya Liébana', '1999-06-04', 'tomasml@gmail.com', '123123123')
    .then(() => console.log('user registered'))
    .catch(error => console.error(error))
    } catch (error) {
        console.error(error)
    }
})
