import mongoose from 'mongoose'
import createEvent from './createEvent.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            createEvent('6637fb61f98ea3c57b76ed51', 'event test', 'description', ['player1', 'player2'], '2025-11-01', '2025-11-10')
                .then((event) => console.log('event created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))