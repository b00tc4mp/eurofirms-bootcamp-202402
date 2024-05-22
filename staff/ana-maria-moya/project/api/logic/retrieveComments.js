import { Comment, Post } from '../data/index.js'

import { errors } from 'com'

const { SystemError, MatchError } = errors

function retrieveComments(postId) {
    return Post.findById(postId)
        .catch(error => { throw new SystemError(error.message) })
        .then(post => {
            if (!post)
                throw new MatchError('post not found')

            return Comment.find({post:postId}).select('-__v').populate('author', 'name surname').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(comments => {
                    comments.forEach(comment => {
                        if (comment._id) {
                            comment.id = comment._id.toString()

                            delete comment._id
                        }

                        if (comment.author._id) {
                            comment.author.id = comment.author._id.toString()

                            delete comment.author._id
                        }

                        comment.post = comment.post.toString()
                    })

                    return comments.reverse()
                })
        })
}

export default retrieveComments