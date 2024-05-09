import mongoose from "mongoose";
import retrieveProducts from "./retrieveProducts.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveProducts('66391786b3dd32b4644005ca')
                .then(products => console.log('retrieved products', products))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })