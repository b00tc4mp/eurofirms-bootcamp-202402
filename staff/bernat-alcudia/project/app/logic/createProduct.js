import { errors, validate } from '../com';
import SessionStorage from 'react-native-session-storage';

const { SystemError } = errors

function createProduct(images, title, description, brand, price, state, stock) {
    validate.token(SessionStorage.getItem('token'))
    validate.base64(images)
    validate.string(title, 'title')
    validate.description(description)
    validate.string(brand, 'brand')
    validate.number(price, 'price')
    validate.state(state)
    validate.number(stock)

    return fetch(`${process.env.EXPO_PUBLIC_API_URL}/products`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${SessionStorage.getItem('token')}`,
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