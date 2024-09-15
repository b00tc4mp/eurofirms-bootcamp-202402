import { User, Post } from '../data/index.js'
import { validate, errors } from 'com'

const { MatchError, SystemError } = errors

function retrievePost(userId, postId) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new MatchError('user not found')

            return Post.findById(postId).select('-__v').populate('author', 'username').lean()
                .then(post => {
                    if (!post) throw new MatchError('post not found')

                    post.id = post._id.toString()

                    delete post._id

                    if (post.author._id) {
                        post.author.id = post.author._id.toString()

                        delete post.author._id
                    }

                    if (userId !== post.author.id) throw new MatchError('you are not the author of this post -> cant retrieve post')

                    return post
                })
                .catch(error => { throw new SystemError(error.message) })
        })
        .catch(error => { throw new SystemError(error.message) })

}

export default retrievePost