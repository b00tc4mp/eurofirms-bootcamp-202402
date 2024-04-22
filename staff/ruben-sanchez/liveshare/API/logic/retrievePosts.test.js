import mongoose from 'mongoose'
import retrievePosts from './retrievePosts.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            retrievePosts('661fcd0d3fecf76fd1ab4697')
                .then(posts => console.log('retrieved posts', posts))
                .catch(error => console.error(error))
            } catch (error) {
                console.error(error) 
            }
    })