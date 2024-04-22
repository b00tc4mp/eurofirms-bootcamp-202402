import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'
import createPost from './createPost.js'
import retrievePosts from './retrievePosts.js'
import deletePost from './deletePost.js'
import updatePost from './updatePost.js'


const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    createPost,
    retrievePosts,
    deletePost,
    updatePost
}

export default logic