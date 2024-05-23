import mongoose from "mongoose";
import retrieveDiets from "./retrieveDiets.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveDiets('664f6777dfce6b1642b14728')
                .then(Exercise => console.log('retrieved Diets', Exercise))
        } catch (error) {
            console.error(error)
        }
    })


// LOGICA FUNCIONA DEMOMENTO TODO OK
//     node retrieveDiet.test.js
//     retrieved Diets [
//       {
//         author: {
//           _id: new ObjectId('663a3aefae18ed96d6179179'),
//           username: 'josemamadotrainer',
//           id: '663a3aefae18ed96d6179179'
//         },
//         title: 'this is a DIET PEPET',
//         image: 'http://image.com/something',
//         video: 'empty',
//         description: 'empty',
//         id: '663ccb011c75a70004e44bd3'
//       },
//       {
//         author: {
//           _id: new ObjectId('663a3b1bd26a81d7178f9043'),
//           username: 'josemamadotrainer1',
//           id: '663a3b1bd26a81d7178f9043'
//         },
//         title: 'MANTENIMIENTO',
//         image: 'https://media0.giphy.com/media/xUA7bdxar9tum5QQtW/giphy.webp?cid=790b761117k49ugnlra9ph5xupyyhb0zjrxdug9vcu9j26qv&ep=v1_gifs_search&rid=giphy.webp&ct=g',
//         video: ' ',
//         description: ' ',
//         id: '663cc2bba08c04f4c73b57e9'
//       },
//       {
//         author: {
//           _id: new ObjectId('663a3b1bd26a81d7178f9043'),
//           username: 'josemamadotrainer1',
//           id: '663a3b1bd26a81d7178f9043'
//         },
//         title: 'MANTENIMIENTO',
//         image: 'https://media0.giphy.com/media/xUA7bdxar9tum5QQtW/giphy.webp?cid=790b761117k49ugnlra9ph5xupyyhb0zjrxdug9vcu9j26qv&ep=v1_gifs_search&rid=giphy.webp&ct=g',
//         video: ' ',
//         description: ' ',
//         id: '663cc29237e5288a7200d37f'
//       }
//     ]
