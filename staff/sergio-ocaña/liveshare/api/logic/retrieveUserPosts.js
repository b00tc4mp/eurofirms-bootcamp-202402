import { Post, User } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, MatchError } = errors

function retrieveUserPosts(userId, targetUserId) {
    validate.id(userId, 'userId')
    validate.id(targetUserId, 'targetUserId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new MatchError('userId not found')

            return Post.find({ author: targetUserId }).select('-__v').sort({ date: -1 }).populate('author', 'username').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(posts => {
                    if (posts.length === 0) throw new MatchError('Upload post before come here')
                    posts.forEach(post => {
                        if (post._id) {
                            post.id = post._id.toString()

                            delete post._id
                        }
                        if (post.author._id) {
                            post.author.id = post.author._id.toString()

                            delete post.author._id
                        }
                    })

                    return posts
                })
        })
}
export default retrieveUserPosts