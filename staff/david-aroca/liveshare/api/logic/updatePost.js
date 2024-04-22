import { User, Post } from "../data/index.js";

function updatePost(userId, postId, text) {

    return User.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then((user) => {
            if (!user) throw new Error('post not found ')

            if (postId.author.toString() !== userId) throw new Error('you are not the author of this post')

            postId.text = text

            return Post.bulkSave()
        })
        .catch(error => { throw new Error(error.message) })
}

export default updatePost