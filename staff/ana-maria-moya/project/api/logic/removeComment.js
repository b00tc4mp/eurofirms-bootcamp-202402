import { User, Post, Comment } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, MatchError } = errors

function removeComment(userId, postId, commentId) {
    validate.id(userId, 'userId')
    validate.id(postId, 'postId')
    validate.id(commentId, 'commentId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            return Post.findById(postId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(post => {
            if (!post)
                throw new MatchError('post not found')

            return Comment.findById(commentId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(comment => {
            if (!comment)
                throw new MatchError(' comment not found')

            return Comment.deleteOne({ _id: comment._id })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(result => { })
}

export default removeComment