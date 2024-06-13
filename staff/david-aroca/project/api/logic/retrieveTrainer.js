import { User } from "../data/index.js";
import { errors } from "com";

const { SystemError, MatchError } = errors;

function retrieveTrainer() {
    return User.find({ role: 'trainer' }).select('-__v').lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(users => {
            if (!users || users.length === 0)
                throw new MatchError('trainer users not found');

            return users;
        });
}

export default retrieveTrainer;
