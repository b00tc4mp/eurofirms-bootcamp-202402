import SessionStorage from 'react-native-session-storage';
function logoutUser() {
    SessionStorage.removeItem('token')
}

export default logoutUser