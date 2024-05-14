import { Post } from '../data/index.js'

import { errors } from 'com'

const { SystemError } = errors

function retrievePosts() {
    return Post.find().select('-__v').populate('author', 'name surname').lean()
        .catch(error => { throw new SystemError(error.message) })
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
}

export default retrievePosts