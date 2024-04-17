import mongoose from "mongoose";
import deletePost from "./deletePost.js";

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            deletePost('661e9c3cf8778ac5964d373f', '661f9ad6b31df6b800559ac4')
                .then(() => console.log('post deleted'))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }
    })