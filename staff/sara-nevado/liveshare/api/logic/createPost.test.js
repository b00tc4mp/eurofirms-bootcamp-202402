import mongoose from 'mongoose'
import createPost from './createPost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            createPost('661fe33b47d2d098ee4fd058', 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2pjN3hsZWFkbmhlZ3YxY2czNWZsMHVwMml4MnJkZXl1NTg3djVybyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vVzH2XY3Y0Ar6/giphy.gif', 'hello')
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })