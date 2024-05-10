import { validate, errors } from '/..com';

const { SystemError } = errors

function removeProduct(params) {
    validate.token(sessionStorage.token)
    validate.id(productId, 'productId')

    return fetch(`http://localhost:9010/products/${productId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
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

export default removeProduct