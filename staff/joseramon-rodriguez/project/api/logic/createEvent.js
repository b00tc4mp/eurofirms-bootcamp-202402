import { validate, errors } from 'com'
import { User, Event, Player } from '../data/index.js'

const { SystemError, MatchError } = errors

async function createEvent(userId, name, description, players, startDate, endDate) {
    validate.id(userId, 'userId')
    validate.name(name, 'name')
    validate.text(description, 'desctiption')
    validate.players(players)
    validate.date(startDate)
    validate.date(endDate)
    validate.eventDates(startDate, endDate)

    const winner = ' '
    const status = 'open'

    validate.winner(winner)
    validate.status(status)

    return User.findById(userId)
        .then(async user => {
            if (!user)
                throw new MatchError('user not found -> cant create event')



            const playersId = await Promise.all(players.map(player => {
                return Player.findOne({ name: player })
                    .catch(error => { throw new SystemError(error.message) })
                    .then(playerFromDb => {
                        if (!playerFromDb)
                            return Player.create({ name: player })
                                .catch(error => { throw new SystemError(error.message) })
                                .then(() => {
                                    return Player.findOne({ name: player })
                                        .catch(error => { throw new SystemError(error.message) })
                                        .then(userCreated => userCreated._id)

                                })

                        return playerFromDb._id
                    })
            }))

            console.log(playersId)

            const event = { name, description, players, winner, startDate, endDate, status }

            return Event.create(event)
                // TODO check if event already exists before creating it
                .then(eventCreated => { })
                .catch(error => { throw new SystemError(error.message) })
        })
        .catch(error => { throw new SystemError(error.message) })


}

export default createEvent