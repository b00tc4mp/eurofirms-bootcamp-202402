import { User, Diet } from "../data/index.js";

import { validate, errors } from "com";

const { SystemError, MatchError } = errors

function modifyDiet(userId, DietId, title, image, video, description) {
    validate.id(userId, 'userId')
    validate.id(DietId, 'DietId')
    validate.text(title, 'title')
    validate.url(image, 'image')
    validate.video(video, 'video')
    validate.description(description, 'description')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            return Diet.findById(DietId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(diet => {
            if (!diet)
                throw new MatchError('diet not found')

            if (diet.author.toString() !== userId)
                throw new MatchError('post does not belong to the user')

            diet.title = title
            diet.image = image
            diet.video = video
            diet.description = description

            return diet.save()
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(result => { })
}

export default modifyDiet

