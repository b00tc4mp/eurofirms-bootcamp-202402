import { User, Product } from '../data/index.js';

import { validate, errors } from 'com';

const { SystemError, MatchError } = errors

function removeProduct(userId, productId) {
    validate.id(userId, 'user id')
    validate.id(productId, 'product id')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new MatchError('user not found')


            return Product.findById(productId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(product => {
            if (!product) throw new MatchError('post not found')

            if (product.author.toString() !== userId) throw new MatchError('product does not belong user')
            //TODO later delete likes and saves product._id
            return Product.deleteOne({ _id: product._id })

        })
        .then(result => { })
}

export default removeProduct