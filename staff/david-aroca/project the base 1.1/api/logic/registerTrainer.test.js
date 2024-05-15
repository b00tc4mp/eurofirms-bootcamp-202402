import mongoose from "mongoose";
import registerUser from "./registerTrainer.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            registerUser('JOSEMAMADOTRAINER1', '2000-01-01', 'jose@mamadotrainer1.com', 'josemamadotrainer1', '123123123',)
                .then(() => console.log('user registered'))
                .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    })

// funciona correctamente asigna el role
// {
//     _id: ObjectId('663a3b1bd26a81d7178f9043'),
//     name: 'JOSEMAMADOTRAINER1',
//     birthdate: ISODate('2000-01-01T00:00:00.000Z'),
//     email: 'jose@mamadotrainer1.com',
//     username: 'josemamadotrainer1',
//     password: '123123123',
//     role: 'trainer',
//     __v: 0
//   }