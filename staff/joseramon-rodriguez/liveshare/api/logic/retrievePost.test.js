import mongoose from 'mongoose'
import retrievePost from './retrievePost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            retrievePost('66216b525f8dc92bbe2d13c6', '662244e2ce4373b1aca2b0e4')
                .then(post => console.log('post retrieved', post))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))