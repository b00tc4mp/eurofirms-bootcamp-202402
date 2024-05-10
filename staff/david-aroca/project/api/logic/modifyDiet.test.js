import mongoose from "mongoose";
import modifyDiet from "./modifyDiet.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {

            modifyDiet('663a3aefae18ed96d6179179', '663ccb011c75a70004e44bd3', 'this is a test1.1', 'http://image.com/testsomething', 'test1.2', 'test1.1')
                .then(() => console.log('Diet modified'))
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })

// logica funciona todo ok cambia todos los campos
// {
//     _id: ObjectId('663ccb011c75a70004e44bd3'),
//     author: ObjectId('663a3aefae18ed96d6179179'),
//     title: 'this is a test1.1',
//     image: 'http://image.com/something',
//     video: 'test1.2',
//     description: 'test1.1',
//     __v: 0
//   }