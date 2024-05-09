import mongoose from 'mongoose'
import removeComment from './removeComment.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            removeComment('663b3fda2232f627631e110f', '663b9e493eb600696b48c9d5', '663c846de7cd7ca365af87e6')
                .then(() => console.log('comment deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })