//Esta función es para traer el id de usuario activo por si se tiene que utilizar para algo
function getLoggedInUserId() {
    return sessionStorage.userId
}

export default getLoggedInUserId;