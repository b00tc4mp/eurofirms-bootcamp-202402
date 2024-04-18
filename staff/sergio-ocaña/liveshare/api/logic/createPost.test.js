import mongoose from 'mongoose'
import createPost from './createPost.js'

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            createPost('661921ccda5eee762a343a6a', 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1.jpg', 'holiiiii')
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })