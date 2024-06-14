import { User, Product } from '../data/index.js';

import { validate, errors } from 'com';

const { SystemError, MatchError } = errors

function removeProduct(userId, productId) {
    validate.id(userId, 'userId')
    validate.id(productId, 'productId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new MatchError('user not found')


            return Product.findById(productId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(product => {
            if (!product) throw new MatchError('product not found')

            return Product.deleteOne({ _id: product._id })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(result => { })
}

export default removeProduct