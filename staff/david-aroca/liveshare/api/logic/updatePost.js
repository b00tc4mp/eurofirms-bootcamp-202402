import { User, Post } from "../data/index.js";

function updatePost(userId, postId, text) {

    return User.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then((user) => {

            if (!user) throw new Error('user not found ')

            return Post.findById(postId)
                .catch(error => { throw new Error(error.message) })

                .then(post => {
                    if (!post) throw new Error('post not found ')

                    if (post.author.toString() !== user.id) throw new Error('you are not the post owner ')

                    post.text = text

                    return post.save()

                        .then(() => { })

                        .catch(error => { throw new new Error(error.message) })
                })

        })


        .catch(error => { throw new Error(error.message) })
}

export default updatePost