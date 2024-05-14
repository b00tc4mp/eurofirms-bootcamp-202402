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

            return Bet.find().select('-__v -user').populate('event', '-_id name description').populate('player', '-_id name').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(bets => {

                    if (!bets)
                        throw new MatchError('bets not found -> cant retrieve bets')

                    bets.forEach(bet => {
                        const idToString = bet._id.toString()

                        delete bet._id

                        bet.id = idToString

                    })

                    return bets
                })

        })

}

export default retrieveBetsFromUser
