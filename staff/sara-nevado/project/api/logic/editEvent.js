import { Event, User } from '../data/index.js'
import { errors, validate } from 'com'

const {  NotFoundError, UnauthorizedError } = errors;

function editEvent(userId, eventId, { type, title, date, duration, address, description }) {
  validate.id(userId, 'userId')
  validate.id(eventId, 'eventId')
  validate.id(userId, 'userId')
  validate.text(type, 'type')
  validate.text(title, 'title')
  validate.date(date, 'date')
  validate.duration(duration, 'duration')
  if (address) validate.text(address, 'address')
  if (description) validate.text(description, 'description')

  return (async () => {
    const user = await User.findById(userId).lean()

    if (!user)
      throw new NotFoundError('user not found')

    const event = await Event.findById(eventId)

    if (!event)
      throw new NotFoundError('Event not found')

    if (user.role !== 'admin')
      throw new UnauthorizedError('User does not have permission to edit this event')

    event.type = type;
    event.title = title;
    event.date = new Date(date).toISOString();
    event.duration = duration;
    event.address = address;
    event.description = description;

    await event.save()
    

  })()
}

export default editEvent

