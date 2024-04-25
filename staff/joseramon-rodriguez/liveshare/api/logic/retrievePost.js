import { User, Post } from '../data/index.js'

function retrievePost(userId, postId) {
    //TODO input validations

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error('user not found')

            return Post.findById(postId).select('-__v').populate('author', 'username').lean()
                .then(post => {
                    if (!post) throw new Error('post not found')

                    post.id = post._id.toString()

                    delete post._id

                    if (post.author._id) {
                        post.author.id = post.author._id.toString()

                        delete post.author._id
                    }

                    if (userId !== post.author.id) throw new Error('you are not the author of this post -> cant retrieve post')

                    return post
                })
                .catch(error => { throw new Error(error.message) })
        })
        .catch(error => { throw new Error(error.message) })

}

export default retrievePost