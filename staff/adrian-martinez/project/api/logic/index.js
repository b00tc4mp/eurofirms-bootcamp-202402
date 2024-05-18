import registerStudent from "./registerStudent.js";
import registerCompany from "./registerCompany.js"
import autenticateUser from "./autenticateUser.js";
import createCareer from "./createCareer.js";
import createOffer from "./createOffer.js";
import retrieveUser from "./retrieveUser.js";
import updateUser from "./updateUser.js";
import deleteUser from "./deleteUser.js";
import deleteCareer from "./deleteCareer.js";
import deleteOffer from "./deleteOffer.js";
import retrieveUsers from "./retrieveUsers.js";
import retrieveOffers from "./retrieveOffers.js";
import retrieveCareersFromStudent from "./retrieveCareersFromStudent.js";
import retrieveOffersFromCompany from "./retrieveOffersFromCompany.js";

const logic = {
    registerStudent,
    registerCompany,
    autenticateUser,
    createCareer,
    createOffer,
    retrieveUser,
    updateUser,
    deleteUser,
    deleteCareer,
    deleteOffer,
    retrieveUsers,
    retrieveOffers,
    retrieveCareersFromStudent,
    retrieveOffersFromCompany
}

export default logic;