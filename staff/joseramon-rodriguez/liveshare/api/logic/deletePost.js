import { User, Post } from "../data/index.js"
function createPost(userId, postId) {
    // TODO input validations
    return User.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then((user) => {
            if (!user) throw new Error('user not found -> cant delete post')

            return Post.findById(postId)
                .then(post => {
                    if (!post) throw new Error('post not found ->cant delete post')

                    if (post.author.toString() !== userId) throw new Error('you are not the author of this post ->cant delete post')

                    return Post.findByIdAndDelete(postId)
                        .catch(error => { throw new Error(error.message) })
                })
                .catch(error => { throw new Error(error.message) })
        })
        .then(postDeleted => { })
}

export default createPost
