import mongoose from "mongoose";
import authenticateUser from "./authenticateUser";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            authenticateUser('joseramon', '123123132')
                .then(userId => console.log('user logged in', userId))
                .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    })