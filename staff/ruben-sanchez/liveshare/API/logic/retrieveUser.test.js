import mongoose from "mongoose";
import retrieveUser from "./retrieveUser.js";

mongoose.connect('mongodb://localhost:27017/test')
    .then(() =>{
        try {
            retrieveUser('661fcd0d3fecf76fd1ab4697','661e11134af4647e8116c9b5')
                .then(user => console.log('user retrieved', user)) 
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })