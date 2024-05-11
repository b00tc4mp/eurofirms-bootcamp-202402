import registerStudent from "./registerStudent.js";
import registerCompany from "./registerCompany.js"
import autenticateUser from "./autenticateUser.js";
import retrieveUser from "./retrieveUser.js";
import updateUser from "./updateUser.js";
import deleteUser from "./deleteUser.js";

const logic = {
    registerStudent,
    registerCompany,
    autenticateUser,
    retrieveUser,
    updateUser,
    deleteUser
}

export default logic;