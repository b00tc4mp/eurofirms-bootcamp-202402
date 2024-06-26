import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'
import createPost from './createPost.js'
import retrievePosts from './retrievePosts.js'
import deletePost from './deletePost.js'
import updatePost from './updatePost.js'
import retrievePost from './retrievePost.js'
import retrieveUserPosts from './retrieveUserPosts.js'

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    createPost,
    retrievePosts,
    retrieveUserPosts,
    retrievePost,
    deletePost,
    updatePost
}

export default logic