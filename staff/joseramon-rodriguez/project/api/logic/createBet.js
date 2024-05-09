import { validate, errors } from 'com'
import { User, Event, Player } from '../data/index.js'

const { SystemError, MatchError } = errors
function createBet(userId, eventId, playerId, amount) {
    validate.id(userId, 'user id')
    validate.id(eventId, 'event id')
    validate.id(playerId, 'player id')
    validate.amount(amount)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found -> cant create bet')

            return Event.findById(eventId)
                .catch(error => { throw new SystemError(error.message) })
                .then(event => {
                    if (!event)
                        console.log("TODO")
                    //TODO
                    // check if event exists
                    // check if player exists    
                    //check ammount
                    //check if wallet > ammount
                    //place bet
                })
        })
}

export default createBet