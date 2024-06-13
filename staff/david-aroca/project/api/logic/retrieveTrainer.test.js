import mongoose from "mongoose";
import retrieveTrainer from "./retrieveTrainer.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveTrainer()
                .then(posts => console.log('retrieved users', posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })


// logica funciona $ node retrieveTrainer.test.js
// retrieved users [
//   {
//     _id: new ObjectId('663a3aefae18ed96d6179179'),
//     name: 'JOSEMAMADOTRAINER',
//     birthdate: 2000-01-01T00:00:00.000Z,
//     email: 'jose@mamadotrainer.com',
//     username: 'josemamadotrainer',
//     password: '123123123',
//     role: 'trainer'
//   },
//   {
//     _id: new ObjectId('663a3b1bd26a81d7178f9043'),
//     name: 'JOSEMAMADOTRAINER1',
//     birthdate: 2000-01-01T00:00:00.000Z,
//     email: 'jose@mamadotrainer1.com',
//     username: 'josemamadotrainer1',
//     password: '123123123',
//     role: 'trainer'
//   },
//   {
//     _id: new ObjectId('664b5c2f391e39cc510a8696'),
//     name: 'JOSEMAMADOTRAINER25',
//     birthdate: 2000-01-01T00:00:00.000Z,
//     email: 'jose@mamadotrainer25.com',
//     username: 'josemamadotrainer25',
//     password: '123123123',
//     role: 'trainer'
//   },
//   {
//     _id: new ObjectId('664b5d8e06159d7aed579ae0'),
//     name: 'JOSEMAMADO26',
//     birthdate: 2000-01-01T00:00:00.000Z,
//     email: 'JOSE@MAMADO26.COM',
//     username: 'JOSEMAMADO26',
//     password: '123123123',
//     role: 'trainer'
//   },
//   {
//     _id: new ObjectId('664b5ec0e6832bdd57d57d87'),
//     name: 'trainer5',
//     birthdate: 2024-05-01T00:00:00.000Z,
//     email: 'trainer5@gmail.com',
//     username: 'trainer5',
//     password: 'trainer5trainer5',
//     role: 'trainer'
//   },
//   {
//     _id: new ObjectId('664b5ef6e6832bdd57d57d8d'),
//     name: 'trainer6trainer6',
//     birthdate: 2024-05-11T00:00:00.000Z,
//     email: 'trainer6trainer6@gmail.com',
//     username: 'trainer6trainer6',
//     password: 'trainer6trainer6',
//     role: 'trainer'
//   }
// ]