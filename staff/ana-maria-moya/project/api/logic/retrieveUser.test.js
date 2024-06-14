import mongoose from 'mongoose'
import retrieveUser from './retrieveUser.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveUser('66390afc0180a1b5b5d510c0', '66390afc0180a1b5b5d510c0')
                .then(user => console.log('user retrieved', user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })