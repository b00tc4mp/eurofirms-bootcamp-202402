import mongoose from "mongoose";
import removeMeasurement from "./removeMeasurement.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            removeMeasurement('663a3b1bd26a81d7178f9043', '6642050a130d4891cde776d6')
                .then(() => console.log('measure deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })

// LOGICA FUNCIONA TESTEADO OK
//     node removeMeasurement.test.js
// measure deleted
