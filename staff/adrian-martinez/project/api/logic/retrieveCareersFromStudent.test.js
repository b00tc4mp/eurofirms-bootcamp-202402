import mongoose from 'mongoose'
import retrieveCareersFromStudent from './retrieveCareersFromStudent.js'

mongoose.connect('mongodb://localhost:27017/FormativeLife')
    .then(() => {
        try {
            retrieveCareersFromStudent("663a37d50452f33ab1ff9f0a")
                .then(carrers => console.log('retrieved carrers', carrers))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })