import { User, Post } from '../data/index.js'

function deletePost(userId, postId) {
    return Post.findById(postId)
        .catch(error => { throw new Error('Post not found') })
        .then(post => {
            if (userId !== post.author.toString()) throw new Error('You can´t delete post from other user')

            return Post.findByIdAndDelete(postId)
                .then(() => { })
                .catch((error) => { throw new Error('Post not found') })
        })
}

export default deletePost