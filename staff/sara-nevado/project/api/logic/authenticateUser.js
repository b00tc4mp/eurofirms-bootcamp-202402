import { User } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, MatchError } = errors

function authenticateUser(email, password) {
    validate.email(email)
    validate.password(password)


    //const predefinedKey = '8989'
    //if (providedKey !== predefinedKey) {
    //throw new ContentError('the entered key is not valid')
    //}

    return User.findOne({ email })
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')


            if (user.password !== password)
                throw new MatchError('wrong credentials')

            return {
                id: user.id,
                role: user.role
            }

        })
}


export default authenticateUser