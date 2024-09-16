import mongoose from "mongoose";
import deletePost from './deletePost.js'


mongoose.connect('mongodb://localhost:27017/test')
    .then(()=>{
        try {
            deletePost('661fcd0d3fecf76fd1ab4697','6620d6706f060886e6c43b55')
                .then(()=>console.log('Post deleted') )
                .catch((error) => console.error(error))
        }catch(error) {
                console.error(error)

        }
    })
