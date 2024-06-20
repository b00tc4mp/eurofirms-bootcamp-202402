import SessionStorage from 'react-native-session-storage';

import { validate, errors } from '../com';

const { SystemError } = errors

function removeProduct(productId) {
    validate.token(SessionStorage.getItem('token'))
    validate.id(productId, 'productId')

    return fetch(`${process.env.EXPO_PUBLIC_API_URL}/products/${productId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${SessionStorage.getItem('token')}`
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