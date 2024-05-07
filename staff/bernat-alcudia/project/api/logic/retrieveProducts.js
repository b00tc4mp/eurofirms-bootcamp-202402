import { User, Product } from "../data/index.js";

import { validate, errors } from "com";

const { SystemError, MatchError } = errors

function retrieveProducts(userId) {
    validate.id(userId, 'userId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new MatchError('user not found')

            return Product.find().select('-___V').populate('author', 'username').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(products => {
                    products.forEach(product => {
                        if (product._id) {
                            product._id = product._id.toString()

                            delete product._id
                        }

                        if (product.author._id) {
                            product.author.id = product.author._id.toString()

                            delete product.author._id
                        }
                    })

                    return products.reverse()
                })
        })
}

export default retrieveProducts