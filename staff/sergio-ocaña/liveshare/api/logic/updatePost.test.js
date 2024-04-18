import mongoose from "mongoose"
import updatePost from "./updatePost.js"

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            updatePost('661921ccda5eee762a343a6a', '6619232204b4ee988525b45e', 'Siento la confusión')
                .then(post => console.log('post updated'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
