import mongoose from "mongoose";
import retrieveTrainees from "./retrieveTrainees.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveTrainees()
                .then(posts => console.log('retrieved users', posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })


// logica funciona ok $ node retrieveTrainees.test.js
// retrieved users [
//   {
//     _id: new ObjectId('663a37c977b7ce4137e97723'),
//     name: 'JOSEMAMADO',
//     birthdate: 2000-01-01T00:00:00.000Z,
//     email: 'jose@mamado.com',
//     username: 'josemamado1',
//     password: '123123123',
//     role: 'trainee'
//   },
//   {
//     _id: new ObjectId('663a4f9f7cc9193db5983fa5'),
//     name: 'david',
//     birthdate: 2024-05-01T00:00:00.000Z,
//     email: 'david@gmail.com',
//     username: 'david',
//     password: '123123123',
//     role: 'trainee'
//   },
//   {
//     _id: new ObjectId('663a5ace9d458e4b7400c969'),
//     name: 'david1',
//     birthdate: 2024-05-02T00:00:00.000Z,
//     email: 'davidd@gmail.com',
//     username: 'davidad',
//     password: '123123123',
//     role: 'trainee'
//   },
//   {
//     _id: new ObjectId('663bc976d012491c81134d56'),
//     name: 'pepe',
//     birthdate: 2024-03-07T00:00:00.000Z,
//     email: 'pepe@gmail.com',
//     username: 'pepe',
//     password: '123123123',
//     role: 'trainee'
//   },
//   {
//     _id: new ObjectId('664b52f9976e2d06eb29aebb'),
//     name: 'josetrainer1',
//     birthdate: 2024-05-01T00:00:00.000Z,
//     email: 'josetrainer1@gmail.com',
//     username: 'josetrainer',
//     password: '123123123',
//     role: 'trainee'
//   },
//   {
//     _id: new ObjectId('664b5bd9976e2d06eb29aec2'),
//     name: 'trainer',
//     birthdate: 2024-05-01T00:00:00.000Z,
//     email: 'trainer@gmail.com',
//     username: 'trainer',
//     password: '123456789',
//     role: 'trainee'
//   },
//   {
//     _id: new ObjectId('664b5e6306159d7aed579ae4'),
//     name: 'trainer3',
//     birthdate: 2024-05-01T00:00:00.000Z,
//     email: 'trainer3@gmail.com',
//     username: 'trainer3',
//     password: '123456789',
//     role: 'trainee'
//   },
//   {
//     _id: new ObjectId('664b5edee6832bdd57d57d8a'),
//     name: 'trainer6',
//     birthdate: 2024-05-14T00:00:00.000Z,
//     email: 'trainer6@gmai.com',
//     username: 'trainer6',
//     password: 'trainer6trainer6',
//     role: 'trainee'
//   }
// ]