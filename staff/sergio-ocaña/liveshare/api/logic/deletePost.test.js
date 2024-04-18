import mongoose from "mongoose"
import deletePost from "./deletePost.js"

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            deletePost('661921ccda5eee762a343a6a', '6620456d237067d33e2b67f8')
                .then(() => console.log('post deleted'))
                .catch(error => console.error(error))
        } catch {
            console.error(error)
        }
    })