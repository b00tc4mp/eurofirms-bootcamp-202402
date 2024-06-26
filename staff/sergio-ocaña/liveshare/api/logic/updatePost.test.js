import mongoose from "mongoose"
import updatePost from "./updatePost.js"

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            updatePost('661921ccda5eee762a343a6a', '6620d95b2995410eed0728a0', 'Siento la confusión 7')
                .then(() => console.log('post updated'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
