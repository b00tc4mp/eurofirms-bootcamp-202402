import mongoose from 'mongoose'
import registerAdmin from './registerAdmin.js'
 
mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            registerAdmin('luita', 'nev', 'luita@hotmail.com', '111111111')
                .then(() => console.log('admin registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })