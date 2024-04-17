import mongoose from 'mongoose'
import retrievePost from './retrievePost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            retrievePost('66163cb3a9730c303816c9b6')
                .then(posts => console.log('retrieved posts', posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })