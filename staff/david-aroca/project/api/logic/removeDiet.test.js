import mongoose from "mongoose";
import removeDiet from "./removeDiet.js";

mongoose.connect('mongodb://localhost:27017/project')

    .then(() => {
        try {
            // cuidado al poner los ids por el orden
            removeDiet('663a3b1bd26a81d7178f9043', '664f4f0d103acdc116d2969a')
                .then(() => console.log('diet deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })

// logica funciona todo ok
// $ node removeDiet.test.js
// diet deleted
