//Lo buscamos en la base de datos
//Comprobar si el usuario existe
//Si no existe lanzamos un error
//Si existe buscamos el post
//Si no existe el post lanzamos un error
//Si existe comprobamos que el author es tu usuario
//Si existe pero el usuario no es el author lanzamos un error
//Si el author es el usuario se borra
import { User, Post } from "../data/index.js";
import { errors, validate } from "com";

const { SystemError, MatchError } = errors;

function deletePost(userId, postId ){

    //TODO inputValidation
    return User.findById(userId)
    .then(user => {
        if(!user){
            throw new Error("The user no exist.")
        }

        return Post.findById(postId)
        .then(post => {
            if(!post){
                throw new Error("The post no exist");
            }
            if(userId !== post.author.toString()){

                throw new Error("The post is not yours");
            }
            
            return Post.findByIdAndDelete(postId)
            .catch( error => {
                throw new Error(error.message);
            })
        })
        .catch(error => {throw new Error(error.message)})
    })
    .catch(error => {throw new Error(error.message)})
    .then( postDeleted => {})
}

export default deletePost;