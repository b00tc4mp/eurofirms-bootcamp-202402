import mongoose from "mongoose";
import retrieveUser from "./retrieveUser.js";

mongoose.connect('mongodb://localhost:27017/test')
    .then(() =>{
        try {
            retrieveUser('661e7c9ed5a64604bf056b39','661e937c0e5eac62756a11a3')
                .then(user => console.log('user retrieved', user)) 
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })