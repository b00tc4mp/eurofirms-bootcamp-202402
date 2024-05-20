import registerSeller from './registerSeller.js';
import registerBuyer from './registerBuyer.js';
import loginUser from './loginUser.js';
import retrieveUser from './retrieveUser.js';
import logoutUser from './logoutUser.js';
import getLoggedInUserId from './getLoggedInUserId.js';
import isUserLoggedIn from './isUserLoggedIn.js';

import createProduct from './createProduct.js';
import retrieveProducts from './retrieveProducts.js';
import retrieveProductDetails from './retrieveProductDetails.js';
import removeProduct from './removeProduct.js';
import modifyProduct from './modifyProduct.js';


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
    retrieveProductDetails,
    removeProduct,
    modifyProduct
}

export default logic