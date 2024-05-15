import { Career, Subject} from "../data/index.js"
import { errors , validate} from "com"

const { SystemError, MatchError } = errors;

function createSubject(subjectCareerId, title, score, comment) {

    validate.id(subjectCareerId, "CareerId");
    validate.text(title);
    validate.score(score);
    validate.text(comment);

    return Career.findById(subjectCareerId)
        .catch(error => { throw new SystemError(error.message) })
        .then(career => {
            if (!career)
                throw new MatchError('career not found')

            const subject = {
                career: career._id,
                title,
                score,
                comment 
            }

            return Subject.create(subject)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(subject => { })
}

export default createSubject;