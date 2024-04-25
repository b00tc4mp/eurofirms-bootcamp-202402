import mongoose from 'mongoose'
import modifyPost from './modifyPost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            modifyPost('66222c1a419c80a764c86966', '6627b18d2c2587a4da244cd1', 'new text')
                .then(() => console.log('post modified'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })