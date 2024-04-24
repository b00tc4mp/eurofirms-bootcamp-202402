import { User, Post } from "../data/index.js"
function updatePost(userId, postId, text) {
    // TODO input validations
    return User.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then((user) => {
            if (!user) throw new Error('user not found -> cant update post')

            return Post.findById(postId)
                .then(post => {
                    if (!post) throw new Error('post not found ->cant update post')

                    if (post.author.toString() !== userId) throw new Error('you are not the author of this post ->cant update post')

                    post.text = text

                    return post.save()
                        .then(postUpdated => { })
                })
                .catch(error => { throw new Error(error.message) })
        })

}

export default updatePost
