import registerUser from './registerUser'
import loginUser from './loginUser'
import retrieveUser from './retrieveUser'
import logoutUser from './logoutUser'
import getLoggedInUserId from './getLoggedInUserId'
import createPost from './createPost'
import retrievePosts from './retrievePosts'
import deletePost from './deletePost'
import modifyPost from './modifyPost'

const logic = {
    registerUser,
    loginUser,
    retrieveUser,
    logoutUser,
    getLoggedInUserId,
    createPost,
    retrievePosts,
    deletePost,
    modifyPost
}

export default logic

