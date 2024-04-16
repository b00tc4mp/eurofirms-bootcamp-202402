import mongoose from 'mongoose'
import retrieveUser from './retrieveUser.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            retrieveUser('6617d38e7197d5c4d62dc42d', '661cf59cfc7f631ce40a4c94')
                .then((targetUser) => console.log('user retrieved', targetUser))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))