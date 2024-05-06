import mongoose from 'mongoose'
import registerCompany from './registerCompany.js'

mongoose.connect('mongodb://localhost:27017/FormativeLife')
    .then(() => {
        try {
            registerCompany("Adrian",'adr@grillo2.com', '123')
                .then(() => console.log('Company registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })