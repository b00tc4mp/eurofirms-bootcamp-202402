import mongoose from 'mongoose'
import retrieveCareers from './retrieveCareersFormStudent.js'

mongoose.connect('mongodb://localhost:27017/FormativeLife')
    .then(() => {
        try {
            retrieveCareers("664388c6cd25fbbfb3101cac")
                .then(carrers => console.log('retrieved carrers', carrers))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })