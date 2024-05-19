import logic from "../logic";
import { errors, validate } from "com";

const { SystemError } = errors;

//TODO Hacer la mismá lógica con el saneamiento de datos que para los careers
function retrieveOffersFromCompany() {
    
    validate.token(sessionStorage.token);
    const userId = logic.getLoggedInUserId();

    return fetch(`http://localhost:8989/users/${userId}/offers`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${ sessionStorage.token }`
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if(res.status === 200){
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(posts => posts);
            }

            return res.json()
                .then(body => {
                    const { error, message } = body;

                    const constructor = errors[error];

                    throw new constructor(message);
                })
    })
}

export default retrieveOffersFromCompany;