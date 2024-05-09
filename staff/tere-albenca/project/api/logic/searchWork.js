import { User, Work } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, MatchError } = errors

function searchWork(userId, searchQuery) {
    validate.id(userId, 'userId')
    validate.text(searchQuery, 'searchQuery')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) { throw new MatchError('user not found') }

            return Work.find({ "title": { "$regex": searchQuery, "$options": "i" } }).select('-__v').populate('author', 'name surname').lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(works => {
                    // TODO sanitize

                    return works
                })
        })
}
export default searchWork