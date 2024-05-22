import mongoose from "mongoose";
import searchMeasurements from "./searchMeasurements.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            searchMeasurements('663a3b1bd26a81d7178f9043', '2024-01-01', '2024-05-22')
                .then(measurement => console.log('measurement finded', measurement))
                .catch(error => console.log(error))
        } catch (error) {
            console.error(error)
        }
    })

// logica funciona ok
// [
//     {
//       author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
//       date: 2024-01-01T00:00:00.000Z,
//       weight: 60,
//       torso: 80,
//       legs: 90,
//       id: '664cfa1a1ed6c209da20a023'
//     },
//     {
//       author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
//       date: 2024-01-08T00:00:00.000Z,
//       weight: 62,
//       torso: 82,
//       legs: 92,
//       id: '664cfa2d1ed6c209da20a029'
//     },
//     {
//       author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
//       date: 2024-01-15T00:00:00.000Z,
//       weight: 64,
//       torso: 84,
//       legs: 94,
//       id: '664cfa441ed6c209da20a02f'
//     },
//     {
//       author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
//       date: 2024-01-22T00:00:00.000Z,
//       weight: 61,
//       torso: 83,
//       legs: 92,
//       id: '664cfa5e1ed6c209da20a035'
//     },
//     {
//       author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
//       date: 2024-01-29T00:00:00.000Z,
//       weight: 68,
//       torso: 88,
//       legs: 98,
//       id: '664cfa751ed6c209da20a03b'
//     },
//     {
//       author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
//       date: 2024-02-01T00:00:00.000Z,
//       weight: 66,
//       torso: 86,
//       legs: 96,
//       id: '664cfa8c1ed6c209da20a041'
//     },
//     {
//       author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
//       date: 2024-02-12T00:00:00.000Z,
//       weight: 70,
//       torso: 90,
//       legs: 100,
//       id: '664cfa9f1ed6c209da20a047'
//     },
//     {
//       author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
//       date: 2024-02-12T00:00:00.000Z,
//       weight: 68,
//       torso: 88,
//       legs: 98,
//       id: '664cfab41ed6c209da20a04d'
//     },
//     {
//       author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
//       date: 2024-02-26T00:00:00.000Z,
//       weight: 74,
//       torso: 94,
//       legs: 104,
//       id: '664cface1ed6c209da20a053'
//     },
//     {
//       author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
//       date: 2024-05-08T00:00:00.000Z,
//       weight: 79,
//       torso: 85,
//       legs: 100,
//       id: '664dee87f00b8ec9bf8a032f'
//     }
//   ]