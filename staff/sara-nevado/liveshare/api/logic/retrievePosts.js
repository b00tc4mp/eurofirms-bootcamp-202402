import { User, Post } from '../data/index.js'

function retrievePosts(userId) {
    //todo input validations

    return User.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user)
                throw new Error('user not found')

            return Post.find().select('-__v').populate('author', 'username').lean()
                .catch(error => { throw new Error(error.message) })
                .then(posts => {
                    posts.forEach(post => {
                        if (post._id) {
                            post.id = post._id.toString()

                            delete post._id
                        }

                        if (post.author._id) {
                            post.author.id = post.author._id.toString()

                            delete post.author._id
                        }
                    })

                    return posts.reverse()
                })
        })

}

export default retrievePosts

