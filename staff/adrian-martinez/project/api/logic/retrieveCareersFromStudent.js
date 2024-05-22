import { Career, User } from '../data/index.js'

import { validate, errors } from 'com'

const { SystemError, MatchError } = errors

//TODO
//Buscar usuario para ver si existe
//Buscar estudios
//Retornar estudios
function retrieveCareersFromStudent(userId) {

    //TODO Validation
    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            return Career.find({student : user._id}).select('-__v').populate("student", "-__v -password -role").lean()
                .then(careers => {
                    //Saneamiento de datos
                    careers.forEach(career => {
                        if(career.student._id){
                            const id = career.student._id.toString();
                            delete career.student._id;

                            career.student.id = id;
                        }
                        
                    })
                    return careers;
                })
        })
}

export default retrieveCareersFromStudent;