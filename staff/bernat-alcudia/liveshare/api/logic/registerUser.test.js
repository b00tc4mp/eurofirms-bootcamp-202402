import mongoose from "mongoose";
import registerUser from "./registerUser.js";

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            registerUser('peter', '2000-02-15', 'peter@pan.com', 'peterPan', '145678910')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })