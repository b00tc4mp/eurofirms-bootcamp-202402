import { User, Diet } from "../data/index.js"
import { errors, validate } from "com"

const { SystemError, MatchError } = errors

function searchDiets(userId, searchQuery) {
    validate.id(userId, 'userId')
    validate.text(searchQuery, 'searchQuery')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) { throw new MatchError('user not found') }

            return Diet.find({ "title": { "$regex": searchQuery, "$options": "i" } }).select('-__v').populate('author', 'username').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(diet => {
                    if (diet.length === 0) { throw new MatchError('diet not found') }

                    diet.forEach(diet => {
                        diet.id = diet._id.toString()
                        delete diet._id

                        if (diet.author._id) {
                            diet.author.id = diet.author._id.toString()

                            delete diet.author._id
                        }

                    })
                    return diet
                })
        })
}

export default searchDiets
