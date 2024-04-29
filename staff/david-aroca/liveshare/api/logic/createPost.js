import validate from './validate.js'
import { User, Post } from '../data/index.js'
import errors from './errors.js'

const { SystemError, MatchError } = errors

function createPost(userId, image, text) {
    validate.userId(userId)
    validate.text(text)
    validate.image(image)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            const post = {
                author: user._id,
                image,
                text,
                date: new Date
            }

            return Post.create(post)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(post => { })
}

export default createPost