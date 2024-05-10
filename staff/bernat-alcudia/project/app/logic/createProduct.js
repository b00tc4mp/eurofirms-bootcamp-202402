import { errors, validate } from '../com';

const { SystemError } = errors

function createProduct(images, title, description, brand, price, state, stock) {
    validate.token(sessionStorage.token)
    validate.urls(images)
    validate.string(title, 'title')
    validate.description(description)
    validate.string(brand, 'brand')
    validate.number(price, 'price')
    validate.state(state)
    validate.number(stock)

    return fetch(`http://localhost:9010/posts`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ images, title, description, brand, price, state, stock })
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 201) return

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body
                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default createProduct