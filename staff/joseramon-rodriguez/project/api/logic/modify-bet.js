import { validate, errors } from 'com'
import { Event, User, Bet } from '../data/index.js'

function modifyBet(userId, betId, amount) {
    validate.id(userId, 'user id')
    validate.id(betId, 'bet id')
    validate.amount(amount)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found -> cant modify bet')

            return Bet.findById(BetId)
                .catch(error => { throw new SystemError(error.message) })
                .then(bet => {
                    if (!bet)
                        throw new MatchError('bet not found -> cant modify bet')

                    if (!bet.user === user._id)
                        throw new MatchError('you can only modify your own bets -> cant modify bet')

                    return Event.findById(bet.event)
                        .catch(error => { throw new SystemError(error.message) })
                        .then(event => {
                            if (!event)
                                throw new MatchError('event not found ->cant modify bet')

                            if (event.status === 'closed')
                                throw new MatchError('you cant modify bets from closed event -> cant modify bet')

                            const newWallet = user.wallet + bet.amount
                            //TODO
                            // adjust wallet

                            return User.findByIdAndUpdate(userId, { wallet: newWallet })
                                .catch(error => { throw new SystemError(error.message) })
                                .then(() => {
                                    //TODO
                                    //modify bet
                                })
                        })

                })
        })
    //TODO
    //check if user exists
    //check if bet exists and in closed(payed)
    //check if event of bet is still open
    //check if amount + bet.amount <= user.wallet
    //modify bet
    //update wallet
}

export default modifyBet