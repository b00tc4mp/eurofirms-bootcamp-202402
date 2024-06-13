import mongoose from "mongoose";
import authenticateUser from "./authenticateUser.js";

mongoose.connect('mongodb://localhost:27017/test')
    .catch(error => console.error(error.message))
    .then(() => {
        try {
            authenticateUser('peterPan', '145678910')
                .then(userId => console.log('user logged-in', userId))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })