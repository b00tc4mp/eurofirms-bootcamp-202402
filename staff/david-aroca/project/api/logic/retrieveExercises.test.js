import mongoose from "mongoose";
import retrieveExercises from "./retrieveExercises.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            retrieveExercises('663a3b1bd26a81d7178f9043')
                .then(Exercise => console.log('retrieved exercised', Exercise))
        } catch (error) {
            console.error(error)
        }
    })




//     logica funciona ok
// {
//     author: {
//         _id: new ObjectId('663a3aefae18ed96d6179179'),
//             username: 'josemamadotrainer',
//                 id: '663a3aefae18ed96d6179179'
//     },
//     title: 'this is an image',
//         image: 'http://image.com/something',
//             video: 'empty',
//                 description: 'empty',
//                     id: '663cc9365e5a58173d101f2d'
// },
// {
//     author: {
//         _id: new ObjectId('663a3b1bd26a81d7178f9043'),
//             username: 'josemamadotrainer1',
//                 id: '663a3b1bd26a81d7178f9043'
//     },
//     title: 'SENTADILLA',
//         image: 'https://media1.giphy.com/media/t7GFoK91krh284Ct8B/giphy.webp?cid=ecf05e471ha5udxqaaf0dz67ga23fdzz1sxgbrhqfm8es0fv&ep=v1_gifs_search&rid=giphy.webp&ct=g',
//             id: '663b9ef8fa5811b4c292135f'
// },
// {
//     author: {
//         _id: new ObjectId('663a3b1bd26a81d7178f9043'),
//             username: 'josemamadotrainer1',
//                 id: '663a3b1bd26a81d7178f9043'
//     },
//     title: 'SENTADILLA',
//         image: 'https://media1.giphy.com/media/t7GFoK91krh284Ct8B/giphy.webp?cid=ecf05e471ha5udxqaaf0dz67ga23fdzz1sxgbrhqfm8es0fv&ep=v1_gifs_search&rid=giphy.webp&ct=g',
//             id: '663b9ed31be3fdb35d19bb33'
// }
//     ]