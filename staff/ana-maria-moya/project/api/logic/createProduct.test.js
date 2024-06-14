import mongoose from 'mongoose'
import createProduct from './createProduct.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
           const userId = '66390a8ea63805748f83bae3'
            const productData = {
               name: 'Camiseta Manuel',
                image: 'https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png',
                description: 'Camiseta Manuel xxl',
                stock: 50,
                price: 10
            }
            

            createProduct(userId, productData)
                .then(() => console.log('product created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })