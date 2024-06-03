import { User, Lesson } from "../data/index.js"
import { validate, errors } from "com"

const { SystemError, MatchError } = errors

function updateLesson(userId, lessonId, title, image, description, video) {
    validate.id(userId, 'userId')
    validate.id(lessonId, 'lessonId')
    validate.text(title, 'title')
    validate.url(image, 'image')
    validate.text(description, 'description')
    validate.url(video, 'video')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            return Lesson.findById(lessonId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(lesson => {
            if (!lesson)
                throw new MatchError('lesson not found')

            if (lesson.teacher.toString() !== userId)
                throw new MatchError('you can not edit this lesson')

            lesson.title = title
            lesson.image = image
            lesson.description = description
            lesson.video = video

            return lesson.save()
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(result => { })
}

export default updateLesson