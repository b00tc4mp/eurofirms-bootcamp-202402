import { User } from "../data/index.js";
import { errors } from "com";

const { SystemError, MatchError } = errors;

function retrieveTrainees() {
    return User.find({ role: 'trainee' }).select('-__v').lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(users => {
            if (users.length === 0)
                throw new MatchError('trainee users not found');

            return users;
        });
}

export default retrieveTrainees;
