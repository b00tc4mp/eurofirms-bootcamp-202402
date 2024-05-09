import { User, Work } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, MatchError } = errors

function removeWork(userId, workId) {
    validate.id(userId, 'userId')
    validate.id(workId, 'workId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('student not found')

            return Work.findById(workId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(work => {
            if (!work)
                throw new MatchError('work not found')

            if (work.author.toString() !== userId)
                throw new MatchError('work does not belong user')

            return Work.deleteOne({ _id: work._id })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(result => { })
}

export default removeWork