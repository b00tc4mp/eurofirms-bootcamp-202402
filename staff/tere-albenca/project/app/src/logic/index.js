import registerStudent from './registerStudent.js'
import registerTeacher from './registerTeacher.js'
import loginUser from './loginUser.js'
import logoutUser from './logoutUser.js'
import getLoggedInUserId from "./getLoggedInUserId"
import getLoggedInUserRole from "./getLoggedInUserRole"
import retrieveUser from './retrieveUser.js'
import isUserLoggedIn from './isUserLoggedIn.js'

const logic = {
    registerStudent,
    registerTeacher,
    loginUser,
    retrieveUser,
    logoutUser,
    getLoggedInUserId,
    getLoggedInUserRole,
    isUserLoggedIn
}

export default logic