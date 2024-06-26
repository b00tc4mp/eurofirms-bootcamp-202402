import { User, Post } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, MatchError } = errors

function deletePost(userId, postId) {
    validate.id(userId)
    validate.id(postId, 'postId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new MatchError(error.message)

            return Post.findById(postId)
                .catch(error => { throw new SystemError(error.message) })
                .then(post => {
                    if (!post) throw new MatchError('Post not found')
                    if (userId !== post.author.toString()) throw new MatchError('You can´t delete post from other user')

                    return Post.findByIdAndDelete(postId)
                        .then(() => { })
                        .catch((error) => { throw new SystemError(error.message) })
                })
        }

        )
}

export default deletePost