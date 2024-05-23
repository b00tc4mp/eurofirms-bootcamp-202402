import { User, Work } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, MatchError } = errors

function updateWork(userId, workId, title, text) {
    validate.id(userId, 'userId')
    validate.id(workId, 'postId')
    validate.text(title, 'title')
    validate.text(text, 'text')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) {
                throw new MatchError('student not found')
            }
            return Work.findById(workId)
                .then(work => {
                    if (!work) {
                        throw new MatchError('this work does not exist')
                    }
                    if (userId !== work.author.toString()) {
                        throw new MatchError('you cant edit this work')
                    }

                    work.title = title
                    work.text = text
                    return work.save()
                })
                .catch(error => { throw new SystemError(error.message) })
                .then(() => { })
        })
}

export default updateWork