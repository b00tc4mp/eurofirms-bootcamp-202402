import mongoose from "mongoose";
import createExercise from "./createExercise.js";

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            createExercise('664f9c87f1486803cb51df34', 'SENTADILLA CON VALIDACIONES FUAM', 'https://media1.giphy.com/media/t7GFoK91krh284Ct8B/giphy.webp?cid=ecf05e471ha5udxqaaf0dz67ga23fdzz1sxgbrhqfm8es0fv&ep=v1_gifs_search&rid=giphy.webp&ct=g', 'a ', 'a ')
                .then(() => console.log('exercise created ok'))
                .catch(error => console.error(error))
        } catch (error) {
            console.log(error)
        }
    })


// la logica esta comprobada y funciona
// {
//     _id: ObjectId('663ba35038fa3cfb3889defc'),
//     author: ObjectId('663a3b1bd26a81d7178f9043'),
//     title: 'SENTADILLA',
//     image: 'https://media1.giphy.com/media/t7GFoK91krh284Ct8B/giphy.webp?cid=ecf05e471ha5udxqaaf0dz67ga23fdzz1sxgbrhqfm8es0fv&ep=v1_gifs_search&rid=giphy.webp&ct=g',
//     video: ' ',
//     description: ' ',
//     __v: 0
//   }