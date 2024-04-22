import mongoose from "mongoose";
import updatePost from './updatePost.js'

mongoose.connect('mongodb://localhost:27017/test')

    .then(() => {
        try {
            updatePost('6616a745373730a8e163ae8a', '661f9a428840cfb63e7b70eb', 'hemos cambiado este post')
                .then(() => console.log('this post has been updated'))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }


    })
    .catch(error => console.error(error))
