import mongoose from 'mongoose'
import deletePost from './deletePost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            deletePost('6617d38e7197d5c4d62dc42d', '661cf737ea8f648ccb16c9b6')
                .then(() => console.log('post deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))