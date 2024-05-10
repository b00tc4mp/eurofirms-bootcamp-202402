import { validate, error, errors } from '/..com';

const { SystemError } = errors

function modifyProduct(productId, images, title, description, brand, price, state, stock) {
    validate.token(sessionStorage.token)
    validate.id(productId, 'productId')
    validate.urls(images)
    validate.string(title)
    validate.description(description)
    validate.urls(brand)
    validate.number(price, 'price')
    validate.state(state)
    validate.number(stock, 'stock')

    return fetch(`http://localhost:9010/products/${productId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ images, title, description, brand, price, state, stock })
    })

        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 204) return

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default modifyProduct