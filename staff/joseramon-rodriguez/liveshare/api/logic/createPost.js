import { User, Post } from "../data/index.js"
import { validate, errors } from 'com'

const { MatchError, SystemError } = errors

function createPost(author, text, image) {
    // TODO input validations
    validate.id(author, 'user id')
    validate.text(text)
    validate.image(image)

    return User.findById(author)
        .catch(error => { throw new SystemError(error.message) })
        .then((user) => {
            if (!user) throw new MatchError('user not found -> cant create post')

            const date = new Date().toISOString()

            const post = { author: user._id, text, image, date }
            return Post.create(post)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(post => { })
}

export default createPost
