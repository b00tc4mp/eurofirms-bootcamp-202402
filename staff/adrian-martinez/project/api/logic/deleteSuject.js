import { Career, Subject } from "../data/index.js";
import { errors, validate } from "com";

const { SystemError, MatchError } = errors;

function deleteSuject(studentCareerId, subjectCareerId){

    validate.id(studentCareerId, "studentCareerId");
    validate.id(subjectCareerId, "subjectCareerId");

    return Career.findById(studentCareerId)
        .catch(error => { throw new SystemError(error.message) })
        .then(career => {
            if(!career){
                throw new MatchError("The studies no exist.")
            }

            return Subject.findById(subjectCareerId)
                .catch(error => { throw new SystemError(error.message)})
        })
        .then(subject => {
            if(!subject){
                throw new MatchError("The subject no exist");
            }

            if(studentCareerId !== subject.career.toString()){

                throw new MatchError("The career is not yours");
            }
                
            return Subject.deleteOne({ _id: subject._id })
                .catch( error => {
                    throw new SystemError(error.message);
                })
            })
        .then( subjectDeleted => {})
}

export default deleteSuject;