import mongoose from "mongoose";
import createMeasurements from "./createMeasurements.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            createMeasurements('663a3aefae18ed96d6179179', '2024-05-13', 155, 155, 155)
                .then(() => console.log('measure created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })



// logica funciona ok
// [
//     {
//       _id: ObjectId('6642050a130d4891cde776d6'),
//       author: ObjectId('663a3b1bd26a81d7178f9043'),
//       date: ISODate('2024-05-12T22:00:00.000Z'),
//       weight: 150,
//       torso: 150,
//       legs: 150,
//       __v: 0
//     }
//   ]
