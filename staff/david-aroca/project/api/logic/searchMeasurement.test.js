import mongoose from "mongoose";
import searchMeasurement from "./searchMeasurement.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            searchMeasurement('663a3b1bd26a81d7178f9043', '2024-05-12')
                .then(measurement => console.log('measurement finded', measurement))
                .catch(error => console.log(error))
        } catch (error) {
            console.error(error)
        }
    })


//     logica comprobada funciona correctamente
//     $  node searchMeasurement.test.js
// measurement finded [
//   {
//     author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
//     date: 2024-05-12T22:00:00.000Z,
//     weight: 150,
//     torso: 150,
//     legs: 150,
//     id: '66421347cb9bb726f28ae751'
//   },
//   {
//     author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
//     date: 2024-05-12T22:00:00.000Z,
//     weight: 120,
//     torso: 120,
//     legs: 60,
//     id: '6642134c750161c72f694f8f'
//   },
//   {
//     author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
//     date: 2024-05-12T22:00:00.000Z,
//     weight: 120,
//     torso: 120,
//     legs: 60,
//     id: '664234e6fa2e7fa6eebcb776'
//   }
// ]