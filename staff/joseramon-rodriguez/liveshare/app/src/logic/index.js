// business layer (logic)
import registerUser from "./registerUser"
import loginUser from "./loginUser"
import retrieveUser from "./retrieveUser"
import logoutUser from "./logoutUser"
import getLoggedInUserId from "./getLoggedInUserId"
import createPost from "./createPost"
import retrievePosts from "./retrievePosts"
import deletePost from "./deletePost"
import updatePost from "./updatePost"
import retrievePost from "./retrievePost"
import isUserLoggedIn from "./isUserLoggedIn"

//logic

const logic = {
    registerUser,
    loginUser,
    retrieveUser,
    logoutUser,
    getLoggedInUserId,
    isUserLoggedIn,
    createPost,
    retrievePosts,
    retrievePost,
    deletePost,
    updatePost
}

export default logic