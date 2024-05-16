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
                    // sanitize
                    if (!works || works.length === 0) { throw new MatchError('works not found') }

                    works.forEach(work => {
                        work.id = work._id.toString()
                        delete work._id

                        work.author.id = work.author._id.toString()

                        delete work.author._id
                    })

                    return works
                })
        })
}
export default searchWork