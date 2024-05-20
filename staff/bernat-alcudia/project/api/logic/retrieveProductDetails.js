import { User, Product } from "../data/index.js";

import { validate, errors } from "com";

const { SystemError, MatchError } = errors

function retrieveProductDetails(userId, productId) {
    validate.id(userId, 'userId')
    validate.id(productId, 'productId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new MatchError('user not found')

            return Product.findById(productId).select('images date  title state price stock description').populate('author', 'username').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(product => {
                    product.author.id = product.author._id.toString()

                    delete product.author._id

                    product.id = product._id.toString()

                    delete product._id

                    return product
                })
        })
}

export default retrieveProductDetails