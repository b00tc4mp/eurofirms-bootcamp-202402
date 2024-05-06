import mongoose from 'mongoose'
import registerUser from './registerUser.js'

mongoose.connect('mongodb://localhost:27017/project')
.then(()=> {
    try {registerUser( 'Ana María', 'Moya Liébana', '2001-06-04', 'anamml461@gmail.com', '123123123')
    .then(() => console.log('user registered'))
    .catch(error => console.error(error))
    } catch (error) {
        console.error(error)
    }
})
