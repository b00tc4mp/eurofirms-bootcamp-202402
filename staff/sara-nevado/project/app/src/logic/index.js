import getLoggedInUserId from './getLoggedInUserId'
import isUserLoggedIn from './isUserLoggedIn'
import registerUser from './registerUser'
import loginUser from './loginUser'
import logoutUser from './logoutUser'
import retrieveUser from './retrieveUser'
import registerAdmin from './registerAdmin'
import createEvent from './createEvent'
import editEvent from './editEvent'
import deleteEvent from './deleteEvent'
import selectedEvent from './selectedEvent'
import deselectedEvent from './deselectedEvent'
import retrieveEvent from './retrieveEvent'



const logic = {
    getLoggedInUserId,
    isUserLoggedIn,
    registerUser,
    loginUser,
    logoutUser,
    retrieveUser,
    registerAdmin,
    createEvent,
    editEvent,
    deleteEvent,
    selectedEvent,
    deselectedEvent,
    retrieveEvent
}

export default logic
