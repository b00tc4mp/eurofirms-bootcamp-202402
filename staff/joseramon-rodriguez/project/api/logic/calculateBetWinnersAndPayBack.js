import { Event, Bet, User, Payment } from '../data/index.js'
import { errors } from 'com'

const { SystemError, MatchError } = errors

function calculateBetWinnersAndPayback() {
    //TODO
    //*get all open events
    //*get winner
    //*sum all the money from bets => prize
    //*cut 5% from prize => bank money
    //*add payment to ledger => event , paydate , bank money 
    //*check bet winners
    //*split prize between winners
    //*pay winners
    //*close event
    return Event.find({ status: 'open' }).select('-__v').lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(events => {
            if (!events)
                throw new MatchError('open events not found -> cant calculate winners and pay back')

            events.forEach(event => {
                if (!event.winner)
                    return

                return Event.findByIdAndUpdate(event._id, { status: 'closed' })
                    .catch(error => { throw new SystemError(error.message) })
                    .then(() => {
                        console.log('event closed')
                        return Bet.find({ event: event._id })
                            .catch(error => { throw new SystemError(error.message) })
                            .then(bets => {
                                if (!bets)
                                    throw new MatchError('bets not found -> cant calculate winners and pay back')
                                let prize = 0

                                let betWinners = []
                                bets.forEach(bet => {
                                    prize += bet.amount

                                    if (bet.player.toString() === event.winner.toString())
                                        betWinners.push(bet.user.toString())
                                })

                                console.log('number of total bets', bets.length)

                                console.log('prize before commision cut', prize)

                                const commisionCut = prize * 0.05

                                prize -= commisionCut

                                const numberOfBetWinners = betWinners.length

                                const prizeSplit = prize / numberOfBetWinners

                                console.log('commision cut', commisionCut)

                                console.log('prize after commision cut', prize)

                                console.log('array of bet winners -> users', betWinners)

                                console.log('number of bet winners', numberOfBetWinners)

                                console.log('prize split to add to each bet winner´s wallet', prizeSplit)

                                betWinners.forEach(betWinner => {
                                    User.findById(betWinner)
                                        .catch(error => { throw new SystemError(error.message) })
                                        .then(user => {
                                            if (!user)
                                                throw new MatchError('user not found -> cant calculate bet winners and pay back')

                                            const newWallet = user.wallet + prizeSplit

                                            user.wallet = newWallet

                                            return user.save()
                                                .catch(error => { throw new SystemError(error.message) })
                                        })
                                })

                                console.log('winners payed')

                                const payment = { event: event._id, date: new Date(), amount: commisionCut }

                                return Payment.create(payment)
                                    .catch(error => { throw new SystemError(error.message) })

                            })
                    })
            })
        })
}

export default calculateBetWinnersAndPayback