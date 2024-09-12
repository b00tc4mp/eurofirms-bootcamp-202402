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

    validate.id(userId, "userId");
    validate.id(postId, "postId");

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if(!user){
                throw new Error("The user no exist.")
            }

            return Post.findById(postId)
                .catch(error => { throw new SystemError(error.message)})
        })
        .then(post => {
            if(!post){
                throw new MatchError("The post no exist");
            }

            if(userId !== post.author.toString()){

                throw new MatchError("The post is not yours");
            }
                
            return Post.deleteOne({ _id: post._id })
                .catch( error => {
                    throw new SystemError(error.message);
                })
            })
        .then( postDeleted => {})
}

export default deletePost;