import { User, Post } from '../data/index.js'

import { validate, errors } from 'com'

const { SystemError, MatchError} = errors

function createPost({ userId, title, image, video, text }) {
    validate.id(userId, 'userId')
    validate.text(title, 'title')
    
    if (image) {
        if (video) throw new MatchError('image and video are both set')
        validate.url(image, 'image')
    }
    else validate.url(video, 'video')

    validate.text(text)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            if (user.role !== 'admin') throw new MatchError('Only admins can create posts')

            const post = {
                author: user._id,
                title,
                image,
                video,
                text,
                date: new Date()
            }

            if (image) post.image = image
            else if (video) post.video = video

            return Post.create(post)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(post => { })
}

export default createPost