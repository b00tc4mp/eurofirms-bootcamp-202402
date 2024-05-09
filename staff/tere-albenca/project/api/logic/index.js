import authenticateUser from './authenticateUser.js'
import createComment from './createComment.js'
import createWork from './createWork.js'
import registerStudent from './registerStudent.js'
import registerTeacher from './registerTeacher.js'
import removeComment from './removeComment.js'
import removeWork from './removeWork.js'
import retrieveComment from './retrieveComment.js'
import retrieveWorks from './retrieveWorks.js'
import retrieveUser from './retrieveUser.js'
import retrieveUserWorks from './retrieveUserWorks.js'
import updateWork from './updateWork.js'
import searchWork from './searchWork.js'
import updateComment from './updateComment.js'

const logic = {
    authenticateUser,
    createComment,
    createWork,
    registerStudent,
    registerTeacher,
    removeComment,
    removeWork,
    retrieveComment,
    retrieveUser,
    retrieveWorks,
    retrieveUserWorks,
    searchWork,
    updateWork,
    updateComment,
}

export default logic