import mongoose from "mongoose";
import deletePost from "./deletePost.js";

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            deletePost('66226a4ac17de436a7a257c8', '6628fb65186f10d78c229469')
                .then(() => console.log('post deleted'))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }
    })