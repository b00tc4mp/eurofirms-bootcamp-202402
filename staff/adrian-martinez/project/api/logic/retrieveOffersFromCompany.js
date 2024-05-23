import { Offer, User } from "../data/index.js"
import { validate, errors } from "com"

const { SystemError, MatchError } = errors;

function retrieveOffersFromCompany(userId, targetUserId){
    validate.id(userId, "userId")
    validate.id(targetUserId, "targetUserId")

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if(!user)
                throw new MatchError("user not found")

            return Offer.find({company : targetUserId}).select("-__v").populate("company", "-__v -password -role").lean()
                .then(offers => {
                    //Saneamiento de datos
                    offers.forEach(offer => {
                        if(offer.company._id){
                            const id = offer.company._id.toString();
                            delete offer.company._id;

                            offer.company.id = id;
                        }
                    })
                    return offers;
                })
        })
}

export default retrieveOffersFromCompany;