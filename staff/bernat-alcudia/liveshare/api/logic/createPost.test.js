import createPost from "./createPost.js";
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            createPost('661fdc02320b3c79ebe5a837', 'https://static-blogs.hoy.es/wp-content/uploads/sites/227/2021/02/El-Sol-NASA.jpg', 'Nasa sun')
                .catch(error => console.error(error))
                .then(() => console.log('created Post'))
        } catch (error) {
            console.error(error)
        }
    })

