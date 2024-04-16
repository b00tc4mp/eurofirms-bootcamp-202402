import mongoose from 'mongoose'
import createPost from './createPost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            createPost('6617d38e7197d5c4d62dc42d', 'sample--> text', 'sample--> image')
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))