import { User, Product } from '../data/index.js';

import { validate, errors } from 'com';

const { SystemError, MatchError } = errors

function retrieveProducts(userId) {
    validate.id(userId, 'userId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new MatchError('user not found')

            return Product.find().select('-__v').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(products => {
                    products.forEach(product => {
                        if (product._id) {
                            product.id = product._id.toString()

                            delete product._id
                        }

                    })

                    return products
                })
        })
}

export default retrieveProducts