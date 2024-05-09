import mongoose from "mongoose";
import createProduct from "./createProduct.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            const images = ['https://content.nationalgeographic.com.es/medio/2022/08/07/el-sol_e26b22b0_1200x720.jpg', 'https://static.nationalgeographic.es/files/styles/image_3200/public/goes-r_suvi_december_15_2019_levels-1.png?w=1600&h=900']
            createProduct('663ccaeac792d77a1492d494', images, 'suns', 'suns galaxy', 'galaxy', 525252512565156, 'new', 5)
                .then(() => console.log('product created'))
                .catch(error => console.log(error.message))
        } catch (error) {
            console.error(error)
        }
    })