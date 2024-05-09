import registerUser from './registerUser.js'
import authenticateUser from './authenticateUser.js'
import retrieveUser from './retrieveUser.js'
import createExercise from './createExercise.js'
import createDiet from './createDiet.js'
import removeDiet from './removeDiet.js'
import removeExercise from './removeExercise.js'


// import retrievePosts from './retrievePosts.js'
// import modifyPost from './modifyPost.js'

const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    createExercise,
    createDiet,
    removeDiet,
    removeExercise,

    // retrievePosts,
    // modifyPost
}

export default logic