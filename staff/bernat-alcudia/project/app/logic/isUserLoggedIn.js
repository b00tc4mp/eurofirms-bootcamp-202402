import SessionStorage from 'react-native-session-storage';

function isUserLoggedIn() {
    return !!SessionStorage.getItem('token')
}

export default isUserLoggedIn