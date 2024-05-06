import mongoose from "mongoose";
import retrieveUser from "./retrieveUser";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveUser('', '')
                .then(user => console.log('user retrieved', user))
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })