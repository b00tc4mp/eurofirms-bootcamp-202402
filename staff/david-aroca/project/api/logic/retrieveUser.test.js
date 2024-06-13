import retrieveUser from "./retrieveUser.js";
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveUser('663a37c977b7ce4137e97723', '663a37c977b7ce4137e97723')
                .then(user => console.log('user retrieved', user))
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })

// logica comprobada va ok
// $ node retrieveUser.test.js
// user retrieved {
//   _id: new ObjectId('663a37c977b7ce4137e97723'),
//   name: 'JOSEMAMADO',
//   birthdate: 2000-01-01T00:00:00.000Z,
//   email: 'jose@mamado.com',
//   username: 'josemamado1',
//   password: '123123123',
//   role: 'trainee',
//   __v: 0
// }
