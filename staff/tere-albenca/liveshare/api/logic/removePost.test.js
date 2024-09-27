import mongoose from 'mongoose'
import removePost from './removePost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            removePost('66226f488b304ab4ec85e8c1', '6628b6e7abb6a874cb87325e')
                .then(() => console.log('post deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })