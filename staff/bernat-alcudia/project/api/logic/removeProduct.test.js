import mongoose from "mongoose";
import removeProduct from "./removeProduct.js";


mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            removeProduct('66391786b3dd32b4644005ca', '663b3984be890980855141d7')
                .then(() => console.log('product deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })