import { errors, validate, utils } from 'com'

const { SystemError, NotFoundError } = errors 

function deselectedEvent(eventId, userId) {
    validate.eventId(eventId);
    validate.userId(userId);

    const token = sessionStorage.getItem('token');
    validate.token(token);

    const { sub: authenticatedUserId } = utils.extractPayload(token);

    if (authenticatedUserId !== userId) {
        throw new Error('Unauthorized: Provided userId does not match authenticated user');
    }

    return fetch(`${import.meta.env.VITE_API_URL}/events/deselect/${eventId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } else if (res.status === 404) {
            throw new NotFoundError('Event not deselected by this user');
        } else {
            throw new SystemError(`Failed to deselect event: ${res.statusText}`);
        }
    })
    .catch(error => {
        throw new SystemError(`Failed to deselect event: ${error.message}`);
    });
}

export default deselectedEvent;
