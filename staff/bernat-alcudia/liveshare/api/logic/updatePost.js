import { User, Post } from "../data/index.js"

function updatePost(userId, postId, text) {
    return User.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user) {
                throw new Error('user not found')
            }
            return Post.findById(postId)
                .then(post => {
                    if (!post) {
                        throw new Error('post not found')
                    }
                    if (userId !== post.author.toString()) {
                        throw new Error('you cant edit this post')
                    }

                    post.text = text
                    return post.save()
                })
                .catch(error => { throw new Error(error.message) })
                .then(() => { })
        })
}

export default updatePost