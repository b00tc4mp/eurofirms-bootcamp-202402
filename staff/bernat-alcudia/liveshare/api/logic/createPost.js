import { Post, User } from "../data/index.js";

// Api logic methods

function createPost(userId, image, text) {
    return User.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user) {
                throw new Error('user not found')
            }
            const post = {
                author: user._id,
                image,
                text,
                date: new Date
            }
            return Post.create(post)

                .catch(error => { throw new Error(error.message) })
        })

        .then(post => { })
}

export default createPost