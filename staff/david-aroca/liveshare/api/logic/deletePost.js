import { Post } from "../data/index.js";

function deletePost(userId, postId) {

    return Post.findById(postId).lean()
        .catch(error => { throw new Error('error in found post') })
        .then(post => {
            if (!post) throw new Error('post does not exist')

            if (userId !== post.author.toString()) throw new Error('you can not delete this post')

            return Post.findByIdAndDelete(postId)
                .then(() => { })
                .catch(error => { throw new Error('error in delete process') })

        })
}

export default deletePost