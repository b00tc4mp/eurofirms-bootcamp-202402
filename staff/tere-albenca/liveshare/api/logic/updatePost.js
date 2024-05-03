import { User, Post } from "../data/index.js"
import { errors, validate } from 'com'

const { SystemError, MatchError } = errors

function updatePost(userId, postId, text) {
    validate.id(userId, 'userId')
    validate.id(postId, 'postId')
    validate.text(text)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new MatchError('user not found')
            }
            return Post.findById(postId)
                .then(post => {
                    if (!post) {
                        throw new MatchError('this post does not exist')
                    }
                    if (userId !== post.author.toString()) {
                        throw new MatchError('you cant edit this post')
                    }

                    post.text = text
                    return post.save()
                })
                .catch(error => { throw new SystemError(error.message) })
                .then(() => { })
        })
}

export default updatePost