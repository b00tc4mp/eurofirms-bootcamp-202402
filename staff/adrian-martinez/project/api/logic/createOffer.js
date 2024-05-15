import { User, Offer} from "../data/index.js"
import { errors , validate} from "com"

const { SystemError, MatchError } = errors;

function createOffer(offerCompanyId, title, description, minSalary, maxSalary, publishDate, expirationDate) {

    /* validate.id(offerCompanyId, "offerCompanyId");
    validate.text(title);
    validate.text(description);
    validate.salary(minSalary); */
    //validate.salary(maxSalary);
    //validate.text(publishDate);
    //validate.Date(expirationDate);

    return User.findById(offerCompanyId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('Company not found')

            const offer = {
                company: user._id,
                title,
                description,
                minSalary,
                maxSalary,
                publishDate,
                expirationDate
            }

            return Offer.create(offer)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(offer => { })
}

export default createOffer;