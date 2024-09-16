import mongoose from "mongoose";
import createPost from "./createPost.js";

mongoose.connect('mongodb://localhost:27017/test')
    .then(() =>{
        try {
            createPost('661fcd0d3fecf76fd1ab4697','https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png','hello world'   )
                .then(() =>console.log('post created'))
                .catch(error => console.error(error))
            }catch(error){
                console.error(error)

            }
    })