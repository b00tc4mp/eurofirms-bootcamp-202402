import registerUser from "./registerUser"
import loginUser from "./loginUser"
import logoutUser from "./logoutUser"
import retrieveUser from "./retrieveUser"
import getLoggedInUserId from "./getLoggedInUserId"
import createPost from "./createPost"
import removePost from "./removePost"
import retrievePosts from "./retrievePost"
import updatePost from "./updatePost"






const logic = {
    registerUser,
    loginUser,
    retrieveUser,
    logoutUser,
    getLoggedInUserId,
    createPost,
    retrievePosts,
    removePost,
    updatePost
}


export default logic