import mongoose from 'mongoose'
import updatePost from './updatePost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            updatePost('661d3cbba3a6b32fda16c9ca', '661d3cbba3a6b32fda16c9ca', 'text->updated')
                .then(() => console.log('post updated'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))