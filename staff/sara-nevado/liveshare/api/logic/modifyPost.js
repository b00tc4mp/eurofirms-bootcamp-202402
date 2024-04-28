import { User, Post } from "../data/index.js"

function modifyPost(userId, postId, text) {
    //todo input validation

    return User.findById(userId)
    .catch(error => { throw new Error(error.message) })
    .then(user => {
        if (!user)
            throw new Error('user not found')

        return Post.findById(postId)
            .catch(error => { throw new Error(error.message) })
    })
    .then(post => {
        if (!post)
            throw new Error('post not found')

        if (post.author.toString() !== userId)
            throw new Error('post does not belong user')

        post.text = text

        return post.save()
    })
    .then(result => { })
}


export default modifyPost