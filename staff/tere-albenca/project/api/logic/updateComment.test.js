import mongoose from "mongoose";
import updateComment from './updateComment.js'

mongoose.connect('mongodb://localhost:27017/project')

    .then(() => {
        try {
            updateComment('663b3fda2232f627631e110f', '663b9e493eb600696b48c9d5', '663c87649e0b32008247f297', 'he cambiado el comment')
                .then(() => console.log('this comment has been updated'))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }


    })
    .catch(error => console.error(error))