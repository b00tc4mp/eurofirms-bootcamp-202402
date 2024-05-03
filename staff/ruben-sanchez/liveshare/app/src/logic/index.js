import registerUser from "./registerUser"
import loginUser from './loginUser'
import retrieveUser from "./retrieveUser"
import isUserLoggedIn from './isUserLoggedIn'
import getLoggedInUserId from "./getLoggedInUserId"
import createPost from "./createPost"
import retrievePosts from "./retrievePosts"
import removePost from "./removePost.js"
import modifyPost from './modifyPost.js'

const logic = {
    registerUser,
    loginUser,
    retrieveUser,
    isUserLoggedIn,
    getLoggedInUserId,
    createPost,
    retrievePosts,
    removePost,
    modifyPost
}

export default logic