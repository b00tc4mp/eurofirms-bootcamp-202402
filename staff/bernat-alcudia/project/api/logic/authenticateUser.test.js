import mongoose from 'mongoose';
import authenticateUser from './authenticateUser.js';

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            authenticateUser('test40', '123123123')
                .then(userId => console.log('user logged in', userId))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
