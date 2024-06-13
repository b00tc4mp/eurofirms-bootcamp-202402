import { User, Exercise } from "../data/index.js";

import { validate, errors } from "com";

const { SystemError, MatchError } = errors

function createExercise(userId, title, image, video, description) {
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

            const exercise = {
                author: user._id,
                title,
                image,
                video,
                description
            }
            return Exercise.create(exercise)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(exercise => { })
}

export default createExercise
