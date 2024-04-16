import mongoose from 'mongoose'
import createPost from './createPost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            createPost('66163cb3a9730c303816c9b6', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reasonwhy.es%2Factualidad%2Fimagenes-positivas-medio-ambiente-influencia-acciones-consumidores&psig=AOvVaw1nSlI5CEMU237gCzO8UDnM&ust=1713388602459000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiqhI7Ux4UDFQAAAAAdAAAAABAE', 'hello mern')
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })