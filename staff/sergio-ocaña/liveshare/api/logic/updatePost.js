import { Post } from '../data/index.js'

function updatePost(userId, postId, text) {

    return Post.findById(postId)
        .catch(error => { throw new Error(error.message) })
        .then(post => {
            if (!post) throw new Error('There is not post with that id')
            if (userId !== post.author.toString()) throw new Error('You can only modify your posts')

            post.text = text

            return post.save()

                // return Post.findByIdAndUpdate({ _id: postId }, { text })
                .then(() => { })
                .catch(error => { throw new Error(error.message) })
        })
}

export default updatePost