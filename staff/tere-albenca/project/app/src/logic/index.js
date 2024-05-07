import registerStudent from './registerStudent.js'
import registerTeacher from './registerTeacher.js'
import loginUser from './loginUser.js'
import logoutUser from './logoutUser.js'
import resetPassword from './resetPassword.js'
import retrieveUser from './retrieveUser.js'

const logic = {
    registerStudent,
    registerTeacher,
    loginUser,
    resetPassword,
    retrieveUser,
    logoutUser
}

export default logic