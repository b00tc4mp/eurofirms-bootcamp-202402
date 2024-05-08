import getLoggedInUserId from './getLoggedInUserId'
import isUserLoggedIn from './isUserLoggedIn'
import registerUser from './registerUser'
import loginUser from './loginUser'
import logoutUser from './logoutUser'
import retrieveUser from './retrieveUser'
import retrieveEvents from './retrieveEvents'
import retrieveEvent from './retrieveEvent'

const logic = {
    getLoggedInUserId,
    isUserLoggedIn,
    registerUser,
    loginUser,
    logoutUser,
    retrieveUser,
    retrieveEvents,
    retrieveEvent
}

export default logic