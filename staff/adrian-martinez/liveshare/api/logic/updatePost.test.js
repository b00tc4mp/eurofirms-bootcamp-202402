import mongoose from "mongoose"
import updatePost from "./updatePost.js"

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            updatePost('66224af9cb2992f34165c8dc', '6628b5a41ac60d11d51be672', 'Siento la confusión 7')
                .then(() => console.log('post updated'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })