import authenticateUser from "./authenticateUser.js"
import retrieveUser from "./retrieveUser.js"
import registerBuyer from "./registerBuyer.js"
import registerSeller from "./registerSeller.js"
import createProduct from "./createProduct.js"
import retrieveProductDetails from "./retrieveProductDetails.js"
import retrieveProducts from "./retrieveProducts.js"
import removeProduct from "./removeProduct.js"
import modifyProduct from "./modifyProduct.js"


const logic = {
    authenticateUser,
    retrieveUser,
    registerBuyer,
    registerSeller,
    retrieveProducts,
    retrieveProductDetails,
    createProduct,
    removeProduct,
    modifyProduct
}

export default logic