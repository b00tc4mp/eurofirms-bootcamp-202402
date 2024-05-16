import { User, Post, Comment } from "../data/index.js"
import { errors, validate } from 'com'

const { SystemError, MatchError } = errors

function modifyComment(userId, postId, commentId, text) {
    validate.id(userId, 'userId')
    validate.id(postId, 'postId')
    validate.id(commentId, 'commentId')
    validate.text(text)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new MatchError('user not found')
            }

            return Post.findById(postId)
                .catch(error => { throw new SystemError(error.message) })
                .then(post => {
                    if (!post) {
                        throw new MatchError('post not found')
                    }
                    return Comment.findById(commentId)
                        .catch(error => { throw new SystemError(error.message) })
                        .then(comment => {
                            if (!comment) {
                                throw new MatchError('comment not found')
                            }
                            if (userId !== comment.author.toString()) {
                                throw new MatchError('cant edit comment')
                            }

                            comment.text = text
                            return comment.save()
                        })
                        .then(() => { })
                })
        })
}

export default modifyComment