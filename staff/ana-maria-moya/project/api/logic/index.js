import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'
import createPost from './createPost.js'
import removePost from './removePost.js'
import retrievePosts from './retrievePosts.js'
import modifyPost from './modifyPost.js'
import createComment from './createComment.js'
import retrieveComments from './retrieveComments.js'
import removeComment from './removeComment.js'
import modifyComment from './modifyComment.js'
import toggleLikePost from './toggleLikePost.js'
import createProduct from './createProduct.js'
import retrieveProducts from './retrieveProducts.js'
import removeProduct from './removeProduct.js'
import modifyProduct from './modifyProduct.js'
import createOrder from './createOrder.js'


const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    createPost,
    removePost,
    retrievePosts,
    modifyPost,
    createComment,
    retrieveComments,
    removeComment,
    modifyComment,
    toggleLikePost,
    createProduct,
    retrieveProducts,
    removeProduct,
    modifyProduct,
    createOrder
}

export default logic