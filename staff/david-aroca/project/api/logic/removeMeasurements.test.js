import mongoose from "mongoose";
import removeMeasurements from "./removeMeasurements.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            removeMeasurements('663a3b1bd26a81d7178f9043', '664cfab41ed6c209da20a04d')
                .then(() => console.log('measure deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })

// LOGICA FUNCIONA TESTEADO OK
//     node removeMeasurement.test.js
// measure deleted
