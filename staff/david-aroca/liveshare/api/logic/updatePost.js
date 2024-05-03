import { User, Post } from "../data/index.js";
import { validate, errors } from 'com'

const { MatchError, SystemError } = errors

function updatePost(userId, postId, text) {
    validate.id(userId, 'userId')
    validate.text(text)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then((user) => {

            if (!user) throw new MatchError('user not found ')

            return Post.findById(postId)
                .catch(error => { throw new SystemError(error.message) })

                .then(post => {
                    if (!post) throw new MatchError('post not found ')

                    if (post.author.toString() !== user.id) throw new MatchError('you are not the post owner ')

                    post.text = text

                    return post.save()
                        .then(() => { })

                        .catch(error => { throw new new SystemError(error.message) })
                })
        })
        .catch(error => { throw new Error(error.message) })
}

export default updatePost