import { validate, errors } from 'com'
import { User, Event, Player } from '../data/index.js'

const { SystemError, DuplicityError } = errors

async function createEvent(userId, name, description, players, startDate, endDate) {
    validate.id(userId, 'userId')
    validate.name(name, 'name')
    validate.text(description, 'desctiption')
    validate.players(players)
    validate.date(startDate, 'start date')
    validate.date(endDate, 'end date')
    validate.eventDates(startDate, endDate)

    const playersId = await Promise.all(players.map(player => {
        return Player.findOne({ name: player })
            .catch(error => { throw new SystemError(error.message) })
            .then(playerFromDb => {
                if (!playerFromDb)
                    return Player.create({ name: player })
                        .catch(error => { throw new SystemError(error.message) })
                        .then(userCreated => userCreated._id)

                return playerFromDb._id
            })
    }))
    const eventCodeJson = JSON.stringify({ name, description, players, startDate, endDate })
    const eventCode = btoa(eventCodeJson)

    return Event.findOne({ code: eventCode })
        .catch(error => { throw new SystemError(error.message) })
        .then(eventFromDb => {
            if (eventFromDb)
                throw new DuplicityError('event already exists -> cant create event')

            const event = { name, description, players: playersId, startDate, endDate, code: eventCode }

            return Event.create(event)
                .then(eventCreated => { })
                .catch(error => { throw new SystemError(error.message) })
        })
        .catch(error => {
            if (error instanceof DuplicityError)
                throw new DuplicityError(error.message)

            throw new SystemError(error.message)
        })


}

export default createEvent