import mongoose from 'mongoose'
import createPost from './createPost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            createPost('661e9c3cf8778ac5964d373f', 'data:image/jpeg;base64', 'hello')
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })