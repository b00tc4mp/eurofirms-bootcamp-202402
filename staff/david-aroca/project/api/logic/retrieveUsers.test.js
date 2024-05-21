import mongoose from "mongoose";
import retrieveUsers from "./retrieveUsers.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveUsers()
                .then(posts => console.log('retrieved users', posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })

//     logica funciona correctamente
//     $ node retrieveUsers.test.js
// retrieved users[
//     {
//         _id: new ObjectId('663a37c977b7ce4137e97723'),
//         name: 'JOSEMAMADO',
//         birthdate: 2000-01-01T00:00:00.000Z,
//         email: 'jose@mamado.com',
//         username: 'josemamado1',
//         password: '123123123',
//         role: 'trainee'
//     },
//     {
//         _id: new ObjectId('663a3aefae18ed96d6179179'),
//         name: 'JOSEMAMADOTRAINER',
//         birthdate: 2000-01-01T00:00:00.000Z,
//         email: 'jose@mamadotrainer.com',
//         username: 'josemamadotrainer',
//         password: '123123123',
//         role: 'trainer'
//     },
//     {
//         _id: new ObjectId('663a3b1bd26a81d7178f9043'),
//         name: 'JOSEMAMADOTRAINER1',
//         birthdate: 2000-01-01T00:00:00.000Z,
//         email: 'jose@mamadotrainer1.com',
//         username: 'josemamadotrainer1',
//         password: '123123123',
//         role: 'trainer'
//     },
//     {