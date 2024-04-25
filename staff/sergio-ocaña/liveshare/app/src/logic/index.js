import registerUser from './registerUser'
import loginUser from './loginUser'
import retrieveUser from './retrieveUser'
import logoutUser from './logoutUser'
import getLoggedInUserId from './getLoggedInUserId'
import createPost from './createPost'
import retrievePosts from './retrievePosts'
import retrievePost from './retrievePost'
import deletePost from './deletePost'
import updatePost from './updatePost'

const logic = {
    registerUser,
    loginUser,
    retrieveUser,
    logoutUser,
    getLoggedInUserId,
    createPost,
    retrievePost,
    retrievePosts,
    deletePost,
    updatePost
}

export default logic