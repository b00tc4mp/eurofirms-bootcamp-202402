import mongoose from "mongoose";
import modifyExercise from "./modifyExercise.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {

            modifyExercise('663a3aefae18ed96d6179179', '663cc9365e5a58173d101f2d', 'this is a test1.1', 'http://image.com/testsomething', 'test1.2', 'test1.1')
                .then(() => console.log('Exercise modified'))
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })


// logica funciona todo ok cambia todos los campos
// {
//     _id: ObjectId('663cc9365e5a58173d101f2d'),
//     author: ObjectId('663a3aefae18ed96d6179179'),
//     title: 'this is a test',
//     image: 'http://image.com/something',
//     video: 'test',
//     description: 'test',
//     __v: 0
//   }
