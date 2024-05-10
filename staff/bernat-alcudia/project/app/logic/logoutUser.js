function logoutUser(params) {
    delete sessionStorage.token
}

export default logoutUser