import mongoose from 'mongoose'
import retrievePosts from './retrievePosts.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrievePosts('66390a8ea63805748f83bae3')
                .then(posts => console.log('retrieved posts', posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })