import { User, Post } from "../data/index.js"
import { validate, errors } from 'com'

const { MatchError, SystemError } = errors

function updatePost(userId, postId, text) {
    // TODO input validations
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')
    validate.text(text)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then((user) => {
            if (!user) throw new MatchError('user not found -> cant update post')

            return Post.findById(postId)
                .then(post => {
                    if (!post) throw new MatchError('post not found ->cant update post')

                    if (post.author.toString() !== userId) throw new MatchError('you are not the author of this post ->cant update post')

                    post.text = text

                    return post.save()
                        .then(postUpdated => { })
                        .catch(error => { throw new SystemError(error.message) })
                })
                .catch(error => { throw new SystemError(error.message) })
        })

}

export default updatePost
