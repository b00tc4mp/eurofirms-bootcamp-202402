import registerSeller from "./registerSeller";
import registerBuyer from "./registerBuyer";
import loginUser from "./loginUser";
import retrieveUser from "./retrieveUser";
import logoutUser from "./logoutUser";
import getLoggedInUserId from "./getLoggedInUserId";
import isUserLoggedIn from "./isUserLoggedIn";

import createProduct from "./createProduct";
import retrieveProducts from "./retrieveProducts";
import removeProduct from "./removeProduct";
import modifyProduct from "./modifyProduct";


const logic = {
    registerSeller,
    registerBuyer,
    loginUser,
    retrieveUser,
    logoutUser,
    getLoggedInUserId,
    isUserLoggedIn,

    createProduct,
    retrieveProducts,
    removeProduct,
    modifyProduct
}

export default logic