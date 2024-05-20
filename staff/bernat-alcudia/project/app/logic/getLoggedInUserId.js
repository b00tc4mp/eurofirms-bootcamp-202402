import { validate, utils } from '../com';
import SessionStorage from 'react-native-session-storage';

function getLoggedInUserId() {
    validate.token(SessionStorage.getItem('token'))

    const { sub: userId } = utils.extractPayload(SessionStorage.getItem('token'))

    return userId
}

export default getLoggedInUserId