import mongoose from "mongoose";
import retrieveUser from "./retrieveUser.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveUser('6639183977b55fbbb0b73b39', '66391786b3dd32b4644005ca')
                .then(user => console.log('user retrieved', user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })