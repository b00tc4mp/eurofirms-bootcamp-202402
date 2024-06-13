import { User, Post } from '../data/index.js'

function removePost(userId, postId) {
    // TODO input validation

    return User.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user)
                throw new Error('user not found')

            return Post.findById(postId)
                .catch(error => { throw new Error(error.message) })
        })
        .then(post => {
            if (!post)
                throw new Error('post not found')

            if (post.author.toString() !== userId)
                throw new Error('post does not belong user')

            return Post.deleteOne({ _id: post._id })
                .catch(error => { throw new Error(error.message) })
        })
        .then(result => { })
}

export default removePost