import retrievePosts from "./retrievePosts.js";
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/test')

    .then(() => {
        try {
            retrievePosts('661fdc02320b3c79ebe5a837')
                .catch(error => console.error(error))
                .then(posts => console.log('posts retrieved', posts))
        } catch (error) {
            console.error(error)
        }
    })