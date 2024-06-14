import mongoose from 'mongoose';
import modifyProduct from './modifyProduct.js';

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            const userId = '66390a8ea63805748f83bae3'
            const productData = {
                productId: '6668279eda8dcbaf1aa5a169',
                name: 'taza',
                image: 'https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png',
                description: 'bonita taza',
                stock: 50,
                price: 5
            }

            modifyProduct(userId, productData)
                .then(() => console.log('product modified'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })