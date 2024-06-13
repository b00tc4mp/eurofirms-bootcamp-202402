import { Event } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, NotFoundError, UnauthorizedError } = errors;

async function editEvent(eventId, { userId, type, title, date, duration, address, description, userRole }) {
  try {
    validate.id(eventId, 'eventId')
    validate.id(userId, 'userId')
    validate.text(type, 'type')
    validate.text(title, 'title')
    validate.date(date, 'date')
    validate.duration(duration, 'duration')
    if (address) validate.text(address, 'address')
    if (description) validate.text(description, 'description')

    const event = await Event.findById(eventId)

    if (!event) {
      throw new NotFoundError('Event not found')
    }

    if (event.userId.toString() !== userId && userRole !== 'admin') {
      throw new UnauthorizedError('User does not have permission to edit this event');
    }
    event.type = type;
    event.title = title;
    event.date = new Date(date).toISOString();
    event.duration = duration;
    event.address = address;
    event.description = description;

    await event.save()
    return event;
  } catch (error) {
    console.error('Error in editEvent:', error)
    throw new SystemError(error.message)
  }
}

export default editEvent

