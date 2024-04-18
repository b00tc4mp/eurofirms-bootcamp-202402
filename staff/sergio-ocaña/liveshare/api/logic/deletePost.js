import { User, Post } from '../data/index.js'

function deletePost(userId, postId) {
    return Post.findById(postId)
        .catch(error => { throw new Error(error.message) })
        .then(post => {
            if (!post) throw new Error('Post not found')
            if (userId !== post.author.toString()) throw new Error('You can´t delete post from other user')

            return Post.findByIdAndDelete(postId)
                .then(() => { })
                .catch((error) => { throw new Error(error.message) })
        })
}

export default deletePost