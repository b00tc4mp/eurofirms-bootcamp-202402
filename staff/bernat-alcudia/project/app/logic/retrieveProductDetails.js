import { validate, errors } from '../com';
import SessionStorage from 'react-native-session-storage';

const { SystemError } = errors

function retrieveProductDetails(productId) {
    validate.token(SessionStorage.getItem('token'))
    validate.id(productId, 'productId')


    return fetch(`${process.env.EXPO_PUBLIC_API_URL}/products/${productId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${SessionStorage.getItem('token')}`
        }
    })
        .catch(error => { throw new Error(error.message) })
        .then(res => {
            if (res.status === 200) return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(product => product)

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default retrieveProductDetails