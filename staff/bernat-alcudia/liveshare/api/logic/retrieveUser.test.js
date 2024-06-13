import retrieveUser from "./retrieveUser.js";
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            retrieveUser('661fdc02320b3c79ebe5a837', '661fdc02320b3c79ebe5a837')
                .then(user => console.log('user retrieved', user))
                .catch(error => console.error(error.message))
        } catch (error) {
            console.error(error.message)
        }
    })
