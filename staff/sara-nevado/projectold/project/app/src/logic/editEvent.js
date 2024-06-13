import { errors, validate, utils } from 'com'
const { SystemError, NotFoundError } = errors

function editEvent(eventId, updatedEvent) {
  const token = sessionStorage.getItem('token')
  if (!token) {
    throw new SystemError('No token found')
  }

  validate.id(eventId, 'eventId')
  validate.event(updatedEvent)
  validate.token(token)

  const { sub: userId } = utils.extractPayload(token)
  const apiUrl = import.meta.env.VITE_API_URL;

  return fetch(`${apiUrl}/events/${eventId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, ...updatedEvent }),
  })
  .catch(error => {
    console.error('Network error:', error.message);
    throw new SystemError('Network error occurred');
  })
  .then(response => {
    console.log('Response status:', response.status);

    if (response.status === 200) {
      return response.json()
        .catch(() => {
          console.error('Failed to parse JSON response');
          throw new SystemError('Invalid JSON response');
        })
        .then(responseData => responseData);
    } else if (response.status === 404) {
      throw new NotFoundError('Event not found');
    } else {
      return response.text()
        .then(text => {
          console.error('Failed to edit event:', text);
          throw new SystemError(`Failed to edit event: ${response.statusText}`);
        });
    }
  });
}

export default editEvent;




  
