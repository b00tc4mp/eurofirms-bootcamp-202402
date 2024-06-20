import mongoose from 'mongoose';
import modifyProduct from './modifyProduct.js';

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            const images = ['iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
            ]
            modifyProduct('663ccaeac792d77a1492d494', '6647688114c29838e365a90c', images, 'new galaxies', 'galaxies universe', 'universe company', 1500, 'used', 7)
                .then(() => console.log('product modified'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })