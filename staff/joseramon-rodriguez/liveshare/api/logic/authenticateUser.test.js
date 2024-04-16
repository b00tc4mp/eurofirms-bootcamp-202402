import mongoose from "mongoose"
import authenticateUser from "./authenticateUser.js"

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            authenticateUser('peplopez', '123123123')
                .then((userId) => console.log('user authenticated', userId))
                .catch(error => console.error(error))
        } catch (error) { console.error(error) }
    })
    .catch(error => console.error(error))