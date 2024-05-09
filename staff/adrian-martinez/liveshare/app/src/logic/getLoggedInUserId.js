//Esta función es para traer el id de usuario activo por si se tiene que utilizar para algo
import { utils, validate } from "com";

function getLoggedInUserId() {

    validate.token(sessionStorage.token);
    const { sub: userId } = utils.extractPayload(sessionStorage.token)

    return userId
}

export default getLoggedInUserId;