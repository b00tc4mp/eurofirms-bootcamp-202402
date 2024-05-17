import registerStudent from "./registerStudent.js";
import registerCompany from "./registerCompany.js"
import autenticateUser from "./autenticateUser.js";
import createCareer from "./createCareer.js";
import retrieveUser from "./retrieveUser.js";
import updateUser from "./updateUser.js";
import deleteUser from "./deleteUser.js";
import deleteCareer from "./deleteCareer.js";
import retrieveUsers from "./retrieveUsers.js";
import retrieveOffers from "./retrieveOffers.js";
import retrieveCareersFromStudent from "./retrieveCareersFromStudent.js";

const logic = {
    registerStudent,
    registerCompany,
    autenticateUser,
    createCareer,
    retrieveUser,
    updateUser,
    deleteUser,
    deleteCareer,
    retrieveUsers,
    retrieveOffers,
    retrieveCareersFromStudent
}

export default logic;