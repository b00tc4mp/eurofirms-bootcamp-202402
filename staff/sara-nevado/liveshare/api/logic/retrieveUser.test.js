import mongoose from 'mongoose'
import retrieveUser from './retrieveUser.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            retrieveUser('6618bef85bbbcbe9a016c9b6', '661fe33b47d2d098ee4fd058')
                .then(user => console.log('user retrieved', user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })