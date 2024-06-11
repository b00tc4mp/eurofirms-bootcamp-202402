import { User, Product } from '../data/index.js';

import { validate, errors } from 'com';

const { SystemError, MatchError } = errors

function modifyProduct(userId, { productId, name, image, description, stock, price }) {
    validate.id(userId, 'userId')
    validate.id(productId, 'productId')
    validate.name(name)
    validate.url(image)
    validate.text(description)
    validate.number(stock, 'stock')
    validate.number(price)


    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new MatchError('user not found')

            return Product.findById(productId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(product => {
            if (!product) throw new MatchError('product not found')

            const date = new Date()

            product.name = name
            product.image = image
            product.description = description
            product.stock = stock
            product.price = price
            
            return product.save()
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(result => { })

}

export default modifyProduct