import mongoose from 'mongoose'
import retrieveEvents from './retrieveEvents.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(async () => {
        try {
            const month = 5
            const year = 2024

            console.log(`Retrieving events for month ${month} and year ${year}...`)

            const events = await retrieveEvents(month, year)
            console.log('Events retrieved:', events)
        } catch (error) {
            console.error('Error retrieving events:', error)
        }
    })
    .catch(error => console.error('Database connection error:', error))

