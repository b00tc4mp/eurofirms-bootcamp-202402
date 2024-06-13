import { User, Exercise } from "../data/index.js";

import { validate, errors } from "com";

const { SystemError, MatchError } = errors

function modifyExercise(userId, exerciseId, title, image, video, description) {
    validate.id(userId, 'userId')
    validate.id(exerciseId, 'exerciseId')
    validate.text(title, 'title')
    validate.url(image, 'image')
    validate.video(video, 'video')
    validate.description(description, 'description')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            return Exercise.findById(exerciseId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(exercise => {
            if (!exercise)
                throw new MatchError('exercise not found')

            if (exercise.author.toString() !== userId)
                throw new MatchError('post does not belong to the user')

            exercise.title = title
            exercise.image = image
            exercise.video = video
            exercise.description = description

            return exercise.save()
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(result => { })
}

export default modifyExercise