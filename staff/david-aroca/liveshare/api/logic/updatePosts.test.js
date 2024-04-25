import mongoose from 'mongoose'
import updatePost from './updatePost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            updatePost('66226a4ac17de436a7a257c8', '6628fbcc186f10d78c22946f', 'text->updated')
                .then(() => console.log('post updated'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))