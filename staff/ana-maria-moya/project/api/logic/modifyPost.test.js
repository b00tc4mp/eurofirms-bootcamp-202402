import mongoose from 'mongoose'
import modifyPost from './modifyPost.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            modifyPost('66390a8ea63805748f83bae3', '663ccf1e4ddc0d7ec33700ac', 'hola soy Manuel')
                .then(() => console.log('post modified'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })