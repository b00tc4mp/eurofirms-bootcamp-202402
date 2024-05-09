import mongoose from "mongoose";
import retrieveComment from "./retrieveComment.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveComment('663b3fda2232f627631e110f', '663b9e493eb600696b48c9d5', '663c875d26806cef147e326b')
                .then(res => console.log(res))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }
    }
    ).catch(error => console.error(error))