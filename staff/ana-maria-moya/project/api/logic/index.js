import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'
import createPost from './createPost.js'
import removePost from './removePost.js'
import retrievePosts from './retrievePosts.js'
import modifyPost from './modifyPost.js'

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    createPost,
    removePost,
    retrievePosts,
    modifyPost
}

export default logic