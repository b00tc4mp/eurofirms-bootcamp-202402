import mongoose from 'mongoose'
import retrievePosts from './retrievePosts.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrievePosts()
                .then(posts => console.log('retrieved posts', posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })