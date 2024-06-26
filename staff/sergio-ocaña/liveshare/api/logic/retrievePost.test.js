import mongoose from "mongoose";
import retrievePost from "./retrievePost.js";

mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        try {
            retrievePost('66222100a1579eef36527323', '6624be7a3f917dd35ac91135')
                .then(res => console.log(res))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }
    }
    ).catch(error => console.error(error))