import mongoose from 'mongoose'
import removeComment from './removeComment.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            removeComment('66390a8ea63805748f83bae3', '66436d297176087ae2779002', '664385d40cbb554de0234686')
                .then(() => console.log('comment deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })