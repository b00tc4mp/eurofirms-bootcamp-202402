import mongoose from "mongoose";
import searchMeasurements from "./searchMeasurements.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            searchMeasurements('6650b057f842191934cb81af', '2024-01-01', '2024-05-22')
                .then(measurement => console.log('measurement finded', measurement))
                .catch(error => console.log(error))
        } catch (error) {
            console.error(error)
        }
    })


//     logica funciona bien comprobada el dia 27 /05
//     $ node searchMeasurements.test.js
// measurement finded[
//     {
//         author: { username: 'samy', id: '6650b057f842191934cb81af' },
//         date: 2024-01 -08T00:00:00.000Z,
//         weight: 86,
//         torso: 102,
//         legs: 66,
//         id: '6650b093f842191934cb81bd'
//     },
//     {
//         author: { username: 'samy', id: '6650b057f842191934cb81af' },
//         date: 2024-01 - 22T00:00:00.000Z,
//         weight: 86,
//         torso: 99,
//         legs: 65,
//         id: '6650b0c3f842191934cb81db'
//     },
//     {
//         author: { username: 'samy', id: '6650b057f842191934cb81af' },
//         date: 2024-01 - 29T00:00:00.000Z,
//         weight: 87,
//         torso: 102,
//         legs: 69,
//         id: '6650b0d3f842191934cb81e1'
//     },
//     {
//         author: { username: 'samy', id: '6650b057f842191934cb81af' },
//         date: 2024-02-05T00:00:00.000Z,
//         weight: 89,
//         torso: 109,
//         legs: 75,
//         id: '6650b0e7f842191934cb81e7'
//     },
//     {
//         author: { username: 'samy', id: '6650b057f842191934cb81af' },
//         date: 2024-03-07T00:00:00.000Z,
//         weight: 49,
//         torso: 80,
//         legs: 60,
//         id: '665362870942a4f15c717b4c'
//     }
// ]