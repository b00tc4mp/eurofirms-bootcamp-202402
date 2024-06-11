import { validate, errors } from 'com';
import {User, Product} from '../data/index.js';
const { SystemError, MatchError } = errors

function createProduct(userId, { name, image, description, stock, price}) {
    validate.id(userId, 'userId')
    validate.name(name)
    validate.url(image)
    validate.text(description)
    validate.number(stock, 'stock')
    validate.number(price)
    


    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new MatchError('user not found')

            const date = new Date()

            const product = {
                author: user._id,
                name,
                image,
                description,
                price,
                stock,
                date
            }

            return Product.create(product)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(product => { })
}

export default createProduct