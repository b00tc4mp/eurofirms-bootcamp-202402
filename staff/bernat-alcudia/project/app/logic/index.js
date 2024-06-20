import registerSeller from './registerSeller.js';
import registerBuyer from './registerBuyer.js';
import loginUser from './loginUser.js';
import retrieveUser from './retrieveUser.js';
import logoutUser from './logoutUser.js';
import getLoggedInUserId from './getLoggedInUserId.js';
import getLoggedInUserRole from './getLoggedInUserRole.js';
import isUserLoggedIn from './isUserLoggedIn.js';

import createProduct from './createProduct.js';
import retrieveProducts from './retrieveProducts.js';
import retrieveProductDetails from './retrieveProductDetails.js';
import removeProduct from './removeProduct.js';
import modifyProduct from './modifyProduct.js';
import toggleLikeProduct from './toggleLikeProduct.js';
import toggleSavedProduct from './toggleSavedProduct.js';
import retrieveUserProductSaved from './retrieveUserProductSaved.js';
import searchProducts from './searchProducts.js';


const logic = {
    registerSeller,
    registerBuyer,
    loginUser,
    retrieveUser,
    logoutUser,
    getLoggedInUserId,
    getLoggedInUserRole,
    isUserLoggedIn,

    createProduct,
    retrieveProducts,
    retrieveProductDetails,
    removeProduct,
    modifyProduct,
    toggleLikeProduct,
    toggleSavedProduct,
    retrieveUserProductSaved,
    searchProducts

}

export default logic