import mongoose from 'mongoose';
import removeProduct from './removeProduct.js';


mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            removeProduct('66390a8ea63805748f83bae3', '6666db71840b033d0d583d0e')
                .then(() => console.log('product deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })