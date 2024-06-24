import { User, Work } from '../data/index.js'
import { errors, validate } from 'com'
// add format data
// import { format } from 'date-fns'

const { SystemError, MatchError } = errors

function createWork(userId, title, image, text) {
    validate.id(userId, 'userId')
    validate.text(title, 'title')
    validate.url(image, 'image')
    validate.text(text, 'text')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            const work = {
                author: user._id,
                title,
                image,
                text,
                date: new Date()
                // date: format(new Date(), 'dd/MM/yyyy HH:mm')
            }
            return Work.create(work)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(work => { })
}

export default createWork