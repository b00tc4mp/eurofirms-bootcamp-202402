import mongoose from "mongoose";
import registerUser from "./registerUser.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            registerUser('JOSEMAMAD', '2000-01-01', 'jose@mamad.com', 'josemamad', '123123123')
                .then(() => console.log('user registered'))
                .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    })

//     logica comprobada ya he registrado el usuario antes y hecho la prueba todo ok
//     $ node registerUser.test.js
// DuplicityError: user already exists
//     at file:///C:/Users/emime/Desktop/eurofirms-bootcamp-202402/staff/david-aroca/project/api/logic/registerUser.js:16:29
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5