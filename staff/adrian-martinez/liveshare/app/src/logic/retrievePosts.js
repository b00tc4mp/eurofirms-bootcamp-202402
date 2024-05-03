import { errors, validate } from "com";

const { SystemError } = errors;

function retrievePosts() {
    
    validate.token(sessionStorage.token);

    return fetch("http://localhost:8080/posts", {
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

export default retrievePosts;