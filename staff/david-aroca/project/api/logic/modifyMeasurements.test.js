import mongoose from "mongoose";
import modifyMeasurements from "./modifyMeasurements.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            modifyMeasurements('663a3b1bd26a81d7178f9043', '664c6789eab468858ee4defa', '2022-02-12', 120, 120, 120)
                .then(() => console.log('measure modified'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })



//     logica comprobada ok funciona
// [
//     {
//         _id: ObjectId('6642050a130d4891cde776d6'),
//         author: ObjectId('663a3b1bd26a81d7178f9043'),
//         date: ISODate('2022-02-11T23:00:00.000Z'),
//         weight: 120,
//         torso: 120,
//         legs: 120,
//         __v: 0
//     }
// ]
