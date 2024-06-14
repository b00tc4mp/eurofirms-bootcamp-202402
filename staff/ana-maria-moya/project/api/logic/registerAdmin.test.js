import mongoose from 'mongoose'
import registerAdmin from './registerAdmin.js'

mongoose.connect('mongodb://localhost:27017/project')
.then(()=> {
    try {registerAdmin( 'Manuel', 'Lopez Lopez', '2001-06-04', 'misobrinoManuel@gmail.com', '123123123')
    .then(() => console.log('user registered'))
    .catch(error => console.error(error))
    } catch (error) {
        console.error(error)
    }
})
