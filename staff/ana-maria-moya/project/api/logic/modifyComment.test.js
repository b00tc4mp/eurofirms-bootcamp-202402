import mongoose from "mongoose";
import modifyComment from './modifyComment.js'

mongoose.connect('mongodb://localhost:27017/project')

    .then(() => {
        try {
            modifyComment('66390afc0180a1b5b5d510c0', '66436d297176087ae2779002', '6644cef4a9695c26de8241f8', 'hello, gente')
                .then(() => console.log('comment modified'))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }


    })
    .catch(error => console.error(error))