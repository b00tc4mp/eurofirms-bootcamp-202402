import { errors, validate } from 'com';
import { Event, User } from '../data/index.js';

const { MatchError, SystemError } = errors;

function retrieveEvent(eventId) {
    validate.id(eventId, 'eventId');

    return Event.findById(eventId)
        .populate('userId', 'name surname email') // Populate to include user details
        .populate('subscribers', 'name surname email') // Populate to include subscribers details
        .lean()
        .catch(error => { throw new SystemError(error.message); })
        .then(event => {
            if (!event) {
                throw new MatchError('Event not found');
            }

            event.id = event._id.toString();
            delete event._id;

            return event;
        });
}

export default retrieveEvent;
