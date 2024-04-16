import mongoose from 'mongoose'
import retrievePosts from './retrievePosts.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            retrievePosts('661e9bb94a925c9cec68dbbd')
                .then(posts => console.log('posts retrieved', posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))