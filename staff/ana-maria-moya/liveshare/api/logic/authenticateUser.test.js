import mongoose from 'mongoose'
import authenticateUser from './authenticateUser.js'
mongoose.connect('mongodb://localhost:27017/test')
.then(() =>{
    try {
        authenticateUser('petepan', '123123123')
        .then(userID =id => console.log('user logged in', userId))
        .catch(error => console.error(error))
    } catch (error) {
        console.error(error)
    }
})