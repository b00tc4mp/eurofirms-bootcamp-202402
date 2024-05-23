import mongoose from "mongoose";
import removeUser from "./removeUser.js";

mongoose.connect('mongodb://localhost:27017/project')

    .then(() => {
        try {
            // cuidado al poner los ids por el orden
            removeUser('664f6777dfce6b1642b14728', '664f67aadfce6b1642b1472b')
                .then(() => console.log('user deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })