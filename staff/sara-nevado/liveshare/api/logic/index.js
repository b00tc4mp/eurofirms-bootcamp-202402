import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'
import createPost from './createPost.js'
import retrievePosts from './retrievePosts.js'
import deletePost from './deletePost.js'
import modifyPost from './modifyPost.js'


const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    createPost,
    retrievePosts,
    deletePost,
    modifyPost
}

export default logic