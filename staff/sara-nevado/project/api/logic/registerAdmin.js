import { User } from '../data/index.js'
import { errors, validate } from 'com'

const { SystemError, DuplicityError, } = errors 

function registerAdmin(name, surname, email, password) { 
    
  
    validate.name(name)
    validate.surname(surname)
    validate.email(email)
    validate.password(password)

    const role = "admin"
    return User.findOne({ email })
   
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (user) throw new DuplicityError('User already exists')

           
            user = { name, surname, email, password, role: 'admin' }

            return User.create(user)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(user => { })
}

export default registerAdmin
