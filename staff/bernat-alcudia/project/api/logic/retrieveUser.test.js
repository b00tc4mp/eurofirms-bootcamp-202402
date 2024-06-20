import mongoose from 'mongoose';
import retrieveUser from './retrieveUser.js';

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveUser('663ccaeac792d77a1492d494', '663ccaeac792d77a1492d494')
                .then(user => console.log('user retrieved', user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })