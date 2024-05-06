import { User } from "../data/index.js"
import { errors, validate } from "com"

const { SystemError, DuplicityError } = errors;

function registerCompany(name, email, password){
    /* validate.name(name);
    validate.surNames(surNames);
    validate.age(age);
    validate.email(email);
    validate.password(password); */

    //Esta variable no va cambiar en esta función al ser el registro de la compañía, por eso no necesita que el usuario le pase este dato
    const role = "company";
    return User.findOne({ email })

        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if(user) throw new DuplicityError("user already exists")

            else 
                user = { name, role, email, password }

            return User.create(user)
                .catch(error => { throw new SystemError(error.message) })     
        })
        .then(user => { })
}

export default registerCompany;
