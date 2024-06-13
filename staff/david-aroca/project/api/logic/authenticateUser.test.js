import mongoose from "mongoose";
import authenticateUser from "./authenticateUser.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            authenticateUser('trainer3', '123456789')
                .then(userId => console.log('user logged in', userId))
                .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    })

//     logica comprobada ok
//     $ node authenticateUser.test.js
// user logged in { id: '663a37c977b7ce4137e97723', role: 'trainee' }