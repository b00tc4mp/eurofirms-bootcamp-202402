import { User, Post } from "../data/index.js"
import { errors, validate } from 'com'

const { SystemError, MatchError } = errors

function retrievePost(userId, postId) {
    validate.userId(userId)
    validate.postId(postId)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new MatchError("user not found")

            return Post.findById(postId).populate('author', 'username').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(post => {
                    if (!post) throw new MatchError('Post not found')
                    post.id = post._id.toString()

                    delete post._id

                    post.author.id = post.author._id.toString()

                    delete post.author._id

                    return post
                })
        })
} export default retrievePost