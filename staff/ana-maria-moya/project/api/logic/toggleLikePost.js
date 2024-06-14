import { User, Post } from "../data/index.js"
import { validate, errors } from "com"

const { SystemError, MatchError } = errors

function toggleLikePost(userId, postId) {
    validate.id(userId, 'userId')
    validate.id(postId, 'postId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new MatchError('user not found')

            return Post.findById(postId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(post => {
            if (!post) throw new MatchError('post not found')

            const index = post.likes.findIndex(userId2 => userId2.toString() === userId)

            if (index < 0) 
                post.likes.push(userId)
            else 
                post.likes.splice(index, 1)

            return post.save()
                .catch(error => { throw new SystemError(error.message) })
        })
}

export default toggleLikePost