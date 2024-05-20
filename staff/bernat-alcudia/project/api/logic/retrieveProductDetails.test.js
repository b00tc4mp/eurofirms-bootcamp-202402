import mongoose from "mongoose";
import retrieveProductDetails from "./retrieveProductDetails.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveProductDetails('664477b3ca0a4a2c40e1ebac', '663cd2e0ea5b0744cb0f1893')
                .then(product => console.log('retrieved products', product))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })