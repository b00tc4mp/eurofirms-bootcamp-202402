import mongoose from 'mongoose'
import createComment from './createComment.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            createComment('66390afc0180a1b5b5d510c0','66436d297176087ae2779002', 'hello, it is a comment')
                .then(() => console.log('comment created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })