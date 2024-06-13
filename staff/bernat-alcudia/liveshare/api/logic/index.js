import registerUser from "./registerUser.js";
import authenticateUser from "./authenticateUser.js";
import retrieveUser from "./retrieveUser.js";
import createPost from "./createPost.js";
import removePost from "./removePost.js";
import updatePost from "./updatePost.js";
import retrievePosts from "./retrievePosts.js";


// Api logic methods Object

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    createPost,
    retrievePosts,
    removePost,
    updatePost
}

export default logic