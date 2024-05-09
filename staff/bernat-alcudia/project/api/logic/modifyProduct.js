import { User, Product } from "../data/index.js";

import { validate, errors } from "com";

const { SystemError, MatchError } = errors

function modifyProduct(userId, productId, images, title, description, brand, price, state, stock) {
    validate.id(userId, 'userId')
    validate.id(productId, 'product id')
    validate.urls(images)
    validate.string(title)
    validate.description(description)
    validate.string(brand)
    validate.number(price)
    validate.state(state)
    validate.number(stock)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new MatchError('user not found')

            return Product.findById(productId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(product => {
            if (!product) throw new MatchError('product not found')


            if (product.author.toString() !== userId) throw new MatchError('product does not belong user')



            const date = new Date()

            product.date = date
            product.images = images
            product.title = title
            product.description = description
            product.brand = brand
            product.price = price
            product.state = state
            product.stock = stock

            return product.save()
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(result => { })

}

export default modifyProduct