import retrieveUserPosts from './retrieveUserPosts.js'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            retrieveUserPosts('661921ccda5eee762a343a6a', '661921ccda5eee762a343a6a')
                .then(posts => console.log('retrieved posts', posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })