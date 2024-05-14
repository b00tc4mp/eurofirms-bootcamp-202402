import { User, Diet } from "../data/index.js";

import { validate, errors } from "com";

const { SystemError, MatchError } = errors

function createDiet(userId, title, image, video, description) {
    validate.id(userId, 'userId')
    validate.text(title, 'title')
    validate.url(image, 'image')
    validate.video(video, 'video')
    validate.description(description, 'description')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            const diet = {
                author: user._id,
                title,
                image,
                video,
                description
            }
            return Diet.create(diet)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(diet => { })
}

export default createDiet
