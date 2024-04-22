import mongoose from "mongoose";
import deletePost from "./deletePost.js";

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            deletePost('661d3cbba3a6b32fda16c9ca', '661d3cbba3a6b32fda16c9ca')
                .then(() => console.log('post deleted'))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }
    })