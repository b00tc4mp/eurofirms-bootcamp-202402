import { errors, validate } from "com";
import logic from ".";

const { SystemError } = errors;

function retrieveCareersFromStudent() {
    
    validate.token(sessionStorage.token);
    const userId = logic.getLoggedInUserId();

    return fetch(`http://localhost:8989/users/${userId}/careers`, {
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
                    .then(careers => careers);
            }
            
            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body;

                    const constructor = errors[error];

                    throw new constructor(message);
                })
    })
}

export default retrieveCareersFromStudent;