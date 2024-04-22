import { Post, User } from '../data/index.js'

function updatePost(userId, postId, text) {
    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('this user does not exist')

            return Post.findById(postId)
                .then(post => {
                    if (!post) throw new Error('this post does not exist')

                    if (userId !== post.author.toString()) throw new Error('you can not edit this post')

                    post.text = text

                    return post.save()

                })
                .catch(error => { throw new Error(error.message) })
                .then(() => { })
        })
        .catch(error => { throw new Error(error.message) })

}
export default updatePost