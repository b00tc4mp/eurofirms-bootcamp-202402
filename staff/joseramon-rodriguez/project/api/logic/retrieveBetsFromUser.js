import { User, Bet } from '../data/index.js'
import { validate, errors } from "com"

const { SystemError, MatchError } = errors

function retrieveBetsFromUser(userId, targetUserId) {
    validate.id(userId, 'user id')
    validate.id(targetUserId, 'target user id')

    return User.findById(targetUserId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found -> cant retrieve events')

            return Bet.find().select('__v').populate().lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(bets => {

                    if (!bets)
                        throw new MatchError('bets not found -> cant retrieve bets')

                    bets.forEach(bet => {
                        //TODO
                        // fix field to be extracted as strings
                        const idToString = bet._id.toString()

                        const eventToString = bet.event.toString()

                        const playerToString = bet.player.toString()

                        const userToString = bet.user.toString()

                        delete bet._id

                        bet.id = idToString

                        bet.event = eventToString

                        bet.player = playerToString

                        bet.user = userToString

                    })

                    return bets
                })

        })

}

export default retrieveBetsFromUser
