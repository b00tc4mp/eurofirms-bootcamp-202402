import { Post } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, MatchError } = errors

function updatePost(userId, postId, text) {
    validate.id(userId)
    validate.id(postId, 'posId')
    validate.text(text)

    return Post.findById(postId)
        .catch(error => { throw new SystemError(error.message) })
        .then(post => {
            if (!post) throw new MatchError('There is not post with that id')
            if (userId !== post.author.toString()) throw new MatchError('You can only modify your posts')

            post.text = text

            return post.save()

                // return Post.findByIdAndUpdate({ _id: postId }, { text })
                .then(() => { })
                .catch(error => { throw new SystemError(error.message) })
        })
}

export default updatePost