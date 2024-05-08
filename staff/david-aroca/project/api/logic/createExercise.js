import { User, Exercise } from "../data/index.js";

import { validate, errors } from "com";

const { SystemError, MatchError } = errors

function createExercise(userId, title, image, video, description) {
    // validate.id(userId, 'userId')
    // validate.text(text)
    // validate.url(image, 'image')

    // crear validacione video y description
    // TODO

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
                .then(exercise => { })
        })
}

export default createExercise
