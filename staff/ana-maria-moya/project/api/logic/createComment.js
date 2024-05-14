import { User, Post, Comment } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, MatchError } = errors

function createComment(userId, postId, text) {
    validate.id(userId, 'userId')
    validate.id(postId, 'postId')
    validate.text(text)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            return Post.findById(postId)
                .catch(error => { throw new SystemError(error.message) })

                .then(post => {
                    if (!post)
                        throw new MatchError('post not found')

                    const comment = {
                        author: user._id,
                        post: post._id,
                        text,
                        date: new Date
                    }

                    return Comment.create(comment)
                        .catch(error => { throw new SystemError(error.message) });

                })
                .then(comment => { })
        })
}

export default createComment