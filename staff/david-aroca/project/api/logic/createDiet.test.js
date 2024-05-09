import mongoose from "mongoose";
import createDiet from "./createDiet.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            createDiet('663a3b1bd26a81d7178f9043', 'MANTENIMIENTO CON VALIDACIONES FUAM', 'https://media0.giphy.com/media/xUA7bdxar9tum5QQtW/giphy.webp?cid=790b761117k49ugnlra9ph5xupyyhb0zjrxdug9vcu9j26qv&ep=v1_gifs_search&rid=giphy.webp&ct=g', ' A', ' A')
                .then(() => console.log('diet created ok'))
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })


//  ES OK LOGICA FUNCIONA
//     { description: ' ',
//     _id: ObjectId('663cc2bba08c04f4c73b57e9'),
//     author: ObjectId('663a3b1bd26a81d7178f9043'),
//     title: 'MANTENIMIENTO',
//     image: 'https://media0.giphy.com/media/xUA7bdxar9tum5QQtW/giphy.webp?cid=790b761117k49ugnlra9ph5xupyyhb0zjrxdug9vcu9j26qv&ep=v1_gifs_search&rid=giphy.webp&ct=g',
//     video: ' ',
//     description: ' ',
//     __v: 0
//   }