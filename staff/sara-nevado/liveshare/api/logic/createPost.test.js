import mongoose from 'mongoose'
import createPost from './createPost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            createPost('661fe33b47d2d098ee4fd058', 'https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png', 'hello mern')
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })