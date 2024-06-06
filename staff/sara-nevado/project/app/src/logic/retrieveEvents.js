import { errors, validate} from 'com';


const { SystemError } = errors;

function retrieveEvents(month, year) {
    validate.month(Number(month));
    validate.year(Number(year));
    validate.token(sessionStorage.token);

    return fetch(`${import.meta.env.VITE_API_URL}/events/${month}/${year}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 200) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(events => {
                        

                        return events;
                    });
            }

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body;

                    const constructor = errors[error] || SystemError;

                    throw new constructor(message);
                });
        });
}

export default retrieveEvents;



