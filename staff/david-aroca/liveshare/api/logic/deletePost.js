import { Post } from "../data/index.js";

function deletePost(userId, postId) {

    return Post.findById(postId)
        .catch(error => { throw new Error(error.message) })
        .then(post => {
            if (!post) throw new Error('post does not exist')

            if (userId !== post.author.toString()) throw new Error('you can not delete this post')

            return Post.findByIdAndDelete(postId)
                .then(() => { })
                .catch(error => { throw new Error(error.message) })

        })
}

export default deletePost