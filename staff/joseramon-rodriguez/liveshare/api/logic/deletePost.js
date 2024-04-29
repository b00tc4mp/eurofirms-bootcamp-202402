import { User, Post } from "../data/index.js"
import { validate, errors } from 'com'

const { MatchError, SystemError } = errors

function deletePost(userId, postId) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then((user) => {
            if (!user) throw new MatchError('user not found -> cant delete post')

            return Post.findById(postId)
                .then(post => {
                    if (!post) throw new MatchError('post not found ->cant delete post')

                    if (post.author.toString() !== userId) throw new MatchError('you are not the author of this post ->cant delete post')

                    return Post.findByIdAndDelete(postId)
                        .catch(error => { throw new SystemError(error.message) })
                })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(postDeleted => { })
}

export default deletePost
