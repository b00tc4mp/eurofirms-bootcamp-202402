import mongoose from "mongoose"
import updatePost from "./updatePost.js"

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            updatePost('661e48be69bcc48515900275', '662a2f2056c330a5d90df961', 'nebulosa time')
                .then(() => { console.log('update post') })
                .catch(error => { console.error(error) })
        } catch (error) {
            console.error(error)
        }
    })

    .catch(error => { console.error(error) })