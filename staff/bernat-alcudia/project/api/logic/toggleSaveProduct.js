import { User, Product } from '../data/index.js';

import { validate, errors } from 'com';

const { SystemError, MatchError } = errors

function toggleSaveProduct(userId, productId) {
    validate.id(userId, 'userId')
    validate.id(productId, 'productId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new MatchError('user not found')
            return Product.findById(productId)
                .then(product => {
                    if (!product) throw new MatchError('product not found')

                    const index = user.saved.findIndex(productId2 => productId2.toString() === productId)
                    if (index < 0)
                        user.saved.push(productId)
                    else
                        user.saved.splice(index, 1)

                    return user.save()
                        .catch(error => { throw new SystemError(error.message) })
                })
        })
        .catch(error => { throw new SystemError(error.message) })

}

export default toggleSaveProduct