import { Post } from '../data/index.js'

function updatePost(userId, postId, editedText) {

    return Post.findById(postId).lean()
        .catch(error => { throw new Error(error.message) })
        .then(post => {
            if (userId !== post.author.toString()) throw new Error('You can only modify your posts')

            const postToUpdate = {
                _id: post._id,
                author: post.author,
                image: post.image,
                text: editedText,
                date: post.date
            }

            return Post.findByIdAndUpdate({ _id: postId }, postToUpdate)
                .then(post => { })
                .catch(error => { throw new Error(error.message) })
        })
}

export default updatePost