import mongoose from 'mongoose';
import toggleSaveProduct from './toggleSaveProduct.js';

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            toggleSaveProduct('664476ddca0a4a2c40e1eba9', '6647685614c29838e365a7c8')
                .then(console.log('product saved'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)


        }
    })