import mongoose from 'mongoose'
import retrieveUser from './retrieveUser.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveUser('6637fb61f98ea3c57b76ed51', '6637fb61f98ea3c57b76ed51')
                .then(user => console.log('user retrieved', user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))