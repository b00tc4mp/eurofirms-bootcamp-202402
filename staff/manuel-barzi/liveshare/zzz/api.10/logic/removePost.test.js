import mongoose from 'mongoose'
import removePost from './removePost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            removePost('66222c1a419c80a764c86968', '6627b451765fc277ad9a4fa6')
                .then(() => console.log('post deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })