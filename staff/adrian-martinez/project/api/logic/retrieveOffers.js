import { Offer, User } from '../data/index.js'

import { validate, errors } from 'com'

const { SystemError, MatchError } = errors

function retrieveOffers(userId) {
    validate.id(userId, 'userId')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('User not found')

            if(user.role !== 'student')
                throw new MatchError('User is not a student')

            return Offer.find().select('-__v').populate('company', 'name address activity').lean()
                .then(offers => {
                    //const users = [];
                    offers.forEach(offer => {
                        // TODO sanitize
                    })
                    return offers;
                })
        })
}

export default retrieveOffers;