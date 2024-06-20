import { utils, validate } from '../com';
import SessionStorage from 'react-native-session-storage';

function getLoggedInUserRole() {
    validate.token(SessionStorage.getItem('token'))
    const { role } = utils.extractPayload(SessionStorage.getItem('token'))

    return role;
}

export default getLoggedInUserRole