import { User, Measurement } from "../data/index.js";
import { errors, validate } from "com";

const { SystemError, MatchError } = errors;

function searchMeasurement(userId, searchQuery) {
    validate.id(userId, 'userId');
    validate.text(searchQuery, 'searchQuery');

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message); })
        .then(user => {
            if (!user) { throw new MatchError('User not found'); }

            // Aquí asumo que searchQuery es una fecha en formato 'YYYY-MM-DD'
            const startDate = new Date(searchQuery);
            const endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + 1); // Incrementa en un día para obtener la fecha límite

            return Measurement.find({ "date": { "$gte": startDate, "$lt": endDate }, "author": userId })
                .select('-__v')
                .populate('author', 'username')
                .lean()
                .then(measurements => {
                    if (!measurements || measurements.length === 0) { throw new MatchError('Measurement not found'); }

                    measurements.forEach(measurement => {
                        measurement.id = measurement._id.toString();
                        delete measurement._id;

                        if (measurement.author._id) {
                            measurement.author.id = measurement.author._id.toString();
                            delete measurement.author._id;
                        }
                    });

                    return measurements;
                })
                .catch(error => { throw new SystemError(error.message); });
        });
}

export default searchMeasurement;
