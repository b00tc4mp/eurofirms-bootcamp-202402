import mongoose from "mongoose";
import retrieveMeasurements from "./retrieveMeasurements.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveMeasurements('664fcba607592e2468bdb910')
                .then(measuremets => console.log('retrieved measure', measuremets))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })


// logica ok
//     $ node retrieveMeasurements.test.js
// retrieved measure [
//   {
//     author: { username: 'pepe', id: '664fcba607592e2468bdb910' },
//     date: 2024-05-29T00:00:00.000Z,
//     weight: 85,
//     torso: 123,
//     legs: 61,
//     id: '664fcbe707592e2468bdb92a'
//   },
//   {
//     author: { username: 'pepe', id: '664fcba607592e2468bdb910' },
//     date: 2024-05-06T00:00:00.000Z,
//     weight: 85,
//     torso: 123,
//     legs: 62,
//     id: '664fcbda07592e2468bdb924'
//   },
//   {
//     author: { username: 'pepe', id: '664fcba607592e2468bdb910' },
//     date: 2024-05-03T00:00:00.000Z,
//     weight: 86,
//     torso: 115,
//     legs: 59,
//     id: '664fcbce07592e2468bdb91e'
//   },
//   {
//     author: { username: 'pepe', id: '664fcba607592e2468bdb910' },
//     date: 2024-05-01T00:00:00.000Z,
//     weight: 85,
//     torso: 120,
//     legs: 60,
//     id: '664fcbbf07592e2468bdb918'
//   }
// ]
