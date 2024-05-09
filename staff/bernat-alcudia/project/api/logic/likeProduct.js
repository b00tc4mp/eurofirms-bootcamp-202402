import { User, Product } from "../data";

import { validate, errors } from "com";

const { SystemError, MatchError } = errors

function likeProduct(userId, productId) {
    validate.id(userId, 'userId')
    validate.id(productId, 'productId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new MatchError('user not found')
        })
        .then(product => {
            if (!product) throw new MatchError('product not found')

            if (product.author.toString() !== userId) throw new MatchError('product does not belong user')

            product.like++

            return product.save()
                .catch(error => { throw new SystemError(error.message) })

        })
}

export default likeProduct