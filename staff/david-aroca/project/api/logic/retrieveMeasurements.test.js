import mongoose from "mongoose";
import retrieveMeasurements from "./retrieveMeasurements.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveMeasurements('663a3b1bd26a81d7178f9043')
                .then(measuremets => console.log('retrieved measure', measuremets))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    
    // retrieved measure [
    //     {
    //       author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
    //       date: 2024-05-12T22:00:00.000Z,
    //       weight: 120,
    //       torso: 120,
    //       legs: 60,
    //       id: '664234e6fa2e7fa6eebcb776'
    //     },
    //     {
    //       author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
    //       date: 2024-05-12T22:00:00.000Z,
    //       weight: 120,
    //       torso: 120,
    //       legs: 60,
    //       id: '6642134c750161c72f694f8f'
    //     },
    //     {
    //       author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
    //       date: 2024-05-12T22:00:00.000Z,
    //       weight: 150,
    //       torso: 150,
    //       legs: 150,
    //       id: '66421347cb9bb726f28ae751'
    //     }
    //   ]
    // logica funciona todo ok 
    
    // [
    //     {
    //       author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
    //       date: 2024-05-12T22:00:00.000Z,
    //       weight: 150,
    //       torso: 150,
    //       legs: 150,
    //       id: '66421350b695a06364bfd2e3'
    //     },
    //     {
    //       author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
    //       date: 2024-05-12T22:00:00.000Z,
    //       weight: 150,
    //       torso: 150,
    //       legs: 150,
    //       id: '6642134c750161c72f694f8f'
    //     },
    //     {
    //       author: { username: 'josemamadotrainer1', id: '663a3b1bd26a81d7178f9043' },
    //       date: 2024-05-12T22:00:00.000Z,
    //       weight: 150,
    //       torso: 150,
    //       legs: 150,
    //       id: '66421347cb9bb726f28ae751'
    //     }
    //   ]
      
