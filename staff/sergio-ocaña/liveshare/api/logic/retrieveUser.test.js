import mongoose from 'mongoose'
import retrieveUser from './retrieveUser.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            retrieveUser('661921ccda5eee762a343a6a', '6619221256e9ef9e3e5bfa0e')
                .then(user => console.log('user retrieved', user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })