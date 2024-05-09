import mongoose from "mongoose";
import modifyProduct from "./modifyProduct.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            const images = ['https://idescubre.fundaciondescubre.es/files/2022/01/Galaxia-Remolino-web_1636621708.png', 'https://cope-cdnmed.cope.es/resources/jpg/1/3/1649312997531.jpg']
            modifyProduct('66391786b3dd32b4644005ca', '663b3955a3f05a69db99e11b', images, 'new galaxies', 'galaxies universe', 'universe company', 1500, 'used', 7)
                .then(() => console.log('product modified'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })