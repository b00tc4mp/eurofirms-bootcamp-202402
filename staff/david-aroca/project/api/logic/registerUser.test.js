import mongoose from "mongoose";
import registerUser from "./registerUser";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            registerUser('JOSEMAMADO', '2000-01-01', 'jose@mamado.com', 'josemamado1', '123123123')
                .then(() => console.log('user registered'))
                .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    })