import mongoose from "mongoose";
import toggleLikePost from './toggleLikePost.js'

mongoose.connect('mongodb://localhost:27017/project')

    .then(() => {
        try {
            toggleLikePost('66390afc0180a1b5b5d510c0','664cc5eec7b0f01b7d5951c1' )
                .then(() => console.log('post liked'))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }


    })
    .catch(error => console.error(error))