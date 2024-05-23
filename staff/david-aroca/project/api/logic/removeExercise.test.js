import mongoose from "mongoose";
import removeExercise from "./removeExercise.js";

mongoose.connect('mongodb://localhost:27017/project')

    .then(() => {
        try {
            // cuidado al poner los ids por el orden
            removeExercise('663a3b1bd26a81d7178f9043', '664f4f256d2482aec4bf052c')
                .then(() => console.log('exercise deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })

//     logica funciona borra el ejercicio todo ok
//     $ node removeExercise.test.js
//     exercise deleted