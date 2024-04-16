import mongoose from "mongoose";
import retrieveUser from "./retrieveUser.js";

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            retrieveUser('661e9c3cf8778ac5964d373f', '661ce2138966a5e180a4154a')
                .then(user => console.log('user retrieved', user))
                .catch(error => console.log(error))
        } catch (error) {
            console.error(error)
        }
    })