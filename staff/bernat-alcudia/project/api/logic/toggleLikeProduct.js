import { User, Product } from '../data/index.js';

import { validate, errors } from 'com';

const { SystemError, MatchError } = errors

function toggleLikeProduct(userId, productId) {
    validate.id(userId, 'userId')
    validate.id(productId, 'productId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new MatchError('user not found')
            return Product.findById(productId)

        })
        .then(product => {
            if (!product) throw new MatchError('product not found')

            const index = product.likes.findIndex(userId2 => userId2.toString() === userId)
            if (index < 0)
                product.likes.push(userId)
            else
                product.likes.splice(index, 1)

            return product.save()
                .catch(error => { throw new SystemError(error.message) })

        })
        .catch(error => { throw new SystemError(error.message) })



}

export default toggleLikeProduct