import mongoose from 'mongoose'
import updatePost from './updatePost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            updatePost('6617d38e7197d5c4d62dc42d', '661ee97874c7bbcdf246f76e', 'text->updated')
                .then(() => console.log('post updated'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))