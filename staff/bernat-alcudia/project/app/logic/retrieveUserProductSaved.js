import { validate, errors, utils } from '../com';
import SessionStorage from 'react-native-session-storage';

const { SystemError } = errors

function retrieveUserProductSaved() {
    validate.token(SessionStorage.getItem('token'))

    const { sub: userId } = utils.extractPayload(SessionStorage.getItem('token'))

    return fetch(`${process.env.EXPO_PUBLIC_API_URL}/products/${userId}/saved`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${SessionStorage.getItem('token')}`
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 200) return res.json()
                .catch(error => { throw new SystemError })

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })

        })
}

export default retrieveUserProductSaved