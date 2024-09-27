import mongoose from "mongoose";
import updatePost from './updatePost.js'

mongoose.connect('mongodb://localhost:27017/test')

    .then(() => {
        try {
            updatePost('662272488b304ab4ec85e812', '6628b6e7abb6a874cb87325e', 'hemos cambiado el post')
                .then(() => console.log('this post has been updated'))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }


    })
    .catch(error => console.error(error))
