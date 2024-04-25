import { User, Post } from "../data/index.js"

function retrievePost(userId, postId) {
    return User.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user) throw new Error("user not found")

            return Post.findById(postId).populate('author', 'username').lean()
                .catch(error => { throw new Error(error.message) })
                .then(post => {
                    if (!post) throw new Error('Post not found')
                    post.id = post._id.toString()

                    delete post._id

                    post.author.id = post.author._id.toString()

                    delete post.author._id

                    return post
                })
        })
} export default retrievePost