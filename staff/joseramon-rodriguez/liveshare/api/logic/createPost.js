import { User, Post } from "../data/index.js"
function createPost(author, text, image) {
    // TODO input validations
    return User.findById(author)
        .catch(error => { throw new Error(error.message) })
        .then((user) => {
            if (!user) throw new Error('user not found -> cant create post')

            const date = new Date().toISOString()

            const post = { author: user._id, text, image, date }
            return Post.create(post)
        })
    //.then(post => { })
}

export default createPost
