import mongoose from 'mongoose'
import removePost from './removePost.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            removePost('66390a8ea63805748f83bae3', '663ca564c4f5a6fdfb6c9d71')
                .then(() => console.log('post deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })