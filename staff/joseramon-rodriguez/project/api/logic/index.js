import registerUser from './registerUser.js'
import authecticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'
import createEvent from './createEvent.js'
import retrieveEvents from './retrieveEvents.js'
import retrieveEvent from './retrieveEvent.js'
import createBet from './createBet.js'
import removeBet from './removeBet.js'
import modifyBet from './modifyBet.js'

const logic = {
    registerUser,
    authecticateUser,
    retrieveUser,
    createEvent,
    retrieveEvents,
    retrieveEvent,
    createBet,
    removeBet,
    modifyBet
}

export default logic