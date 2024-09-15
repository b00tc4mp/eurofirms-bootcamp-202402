import { User, Post } from '../data/index.js'
import { validate, errors } from 'com'

const { MatchError, SystemError } = errors

function retrievePosts(userId) {
    validate.id(userId, 'user id')

    return User.findById(userId)
        .then(user => {
            if (!user) throw new MatchError('user not found')

            return Post.find().sort({ date: -1 }).select('-__v').populate('author', 'username').lean()
                .then(posts => {
                    posts.forEach(post => {
                        post.id = post._id.toString()

                        delete post._id

                        if (post.author._id) {
                            post.author.id = post.author._id.toString()

                            delete post.author._id
                        }

                    })
                    return posts
                })
                .catch(error => { throw new SystemError(error.message) })
        })
        .catch(error => { throw new SystemError(error.message) })

}

export default retrievePosts