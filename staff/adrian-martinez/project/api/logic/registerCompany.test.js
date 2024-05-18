import mongoose from 'mongoose'
import registerCompany from './registerCompany.js'

mongoose.connect('mongodb://localhost:27017/FormativeLife')
    .then(() => {
        try {
            registerCompany("Google","Parque tech, Nº1 - San Francisco","Desarrollo de software",'admin@google.com','12345678')
                .then(() => console.log('Company registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })