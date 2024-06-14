import mongoose from 'mongoose'
import createPost from './createPost.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            const postData = {
                userId: '66390a8ea63805748f83bae3',
                title: 'hello Manuel',
                text: 'hola soy Manuel',
                image: 'https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png',
            }

            createPost(postData)
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })