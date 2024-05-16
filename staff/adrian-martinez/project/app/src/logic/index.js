import registerStudent from "./registerStudent"
import registerCompany from "./registerCompany"
import loginUser from "./loginUser"
import logoutUser from "./logoutUser"
import getLoggedInUserId from "./getLoggedInUserId" 
import getLoggedInUserRole from "./getLoggedInUserRole"
import isUserLoggedIn from "./isUserLoggedIn"
import retrieveUser from "./retrieveUser"
import retrieveUsers from "./retrieveUsers"
import retrieveCareersFromStudent from "./retrieveCareersFromStudent"

const logic = {
    registerStudent,
    registerCompany,
    loginUser,
    getLoggedInUserId,
    getLoggedInUserRole,
    isUserLoggedIn,
    retrieveUser,
    retrieveUsers,
    retrieveCareersFromStudent,
    logoutUser
}

export default logic;