import { User, Product } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, MatchError } = errors

function searchProduct(userId, searchQuery) {
    validate.id(userId, 'userId')
    validate.string(searchQuery, 'searchQuery')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) { throw new MatchError('user not found') }

            return Product.find({ 'title': { '$regex': searchQuery, '$options': 'i' } }).select('-__v').populate('author', 'username').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(product => {
                    if (product.length === 0) { throw new MatchError('product not found') }


                    product.forEach(product => {
                        product._id = product._id.toString()
                        delete product._id

                        if (product.author._id) {
                            product.author.id = product.author._id.toString()

                            delete product.author._id
                        }
                    })
                    return product
                })
        })
}

export default searchProduct