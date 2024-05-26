import mongoose from "mongoose";
import retrieveUserMeasurements from "./retrieveUserMeasurements.js";
mongoose.connect('mongodb://localhost:27017/project')
    .then(async () => {
        try {
            const userId = '664f9c87f1486803cb51df34';
            const targetUserId = '665058af0df05d454edc9946';

            const measurements = await retrieveUserMeasurements(userId, targetUserId);

            console.log('Retrieved Measures:', measurements);
        } catch (error) {
            console.error(error);
        } finally {
            mongoose.disconnect();
        }
    })


// logica funciona $ node retrieveUserMeasurements.test.js
// Retrieved Measures: [
//   {
//     author: { username: 'JOSERAMON56', id: '665058af0df05d454edc9946' },
//     date: 2024-05-01T00:00:00.000Z,
//     weight: 4665,
//     torso: 654,
//     legs: 65165,
//     id: '66505c880df05d454edc99ba'
//   }
// ]