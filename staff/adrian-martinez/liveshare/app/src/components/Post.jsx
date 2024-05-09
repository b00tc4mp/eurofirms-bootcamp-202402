import { useState } from "react";
import logic from "../logic"
import Button from "./Button";

function Post({ post, onPostDeleted, onPostUpdate }){

    const handleDeletePost = () => {

        const deleteConfirmed = confirm("Delete ??????")
        
        if(!deleteConfirmed) return;
        //Si es falso se sigue con la ejecución
        try{
            logic.deletePost(post.id)
            .then(() => {onPostDeleted()})
            .catch(error =>  {

                console.error(error);
                alert(error.message);
            })
        }
        catch(error){
            
            console.error(error);
            alert(error.message);
        }
    }

    const [changePost, setChangePost] = useState(false);

    const handleUpdatePost = () => setChangePost(true);

    const handleUpdateSubmit = event => {
        event.preventDefault();

        const form = event.target

        const text = form.text.value

        const updateConfirmed = confirm("Confirm changes ??????");
        
        if(!updateConfirmed) return;
        //Si es falso se sigue con la ejecución
        try{
            logic.updatePost(post.id, text)
                .then(() => {
                    onPostUpdate();
                    setChangePost(false);

                    console.debug("Se tiene que cerrar");
                })
                .catch(error => {

                console.error(error);
                alert(error.message);
            })
        }
        catch(error){
            
            console.error(error);
            alert(error.message);
        }
    }

    /* const handleShowForm = () => {

        setChangePost(true);
    }
    */
     const handleCancelChange = () => {

        setChangePost(false);
        
    } 

    console.debug("Post render");

    return (
        <article className="border-2 border-solid border-black m-10">
            <h3 className="p-2">{ post.author.username }</h3>
            <img src={post.image} className="md:sm hover:w-full"/>
            {/* <p className="p-2">{ post.text }</p> */}
            <time className="block text-right text-xs">{ post.date }</time>
            {/* No se puede hacerlo con un if porque la condición tiene que devolver algo a la fuerza. 
                los if no devuelven, solo cambian.
                
                if(post.author.id === post.id){
                <button className="" onClick={ () => deletePost(post.id) }></button>
            }  */}
            
            { post.author.id === logic.getLoggedInUserId() && <Button className="border-2 border-solid border-white bg-red-500 text-white" onClick={ handleDeletePost }>Borrar</Button> }
            { post.author.id === logic.getLoggedInUserId() && <Button className="border-2 border-solid border-white bg-green-700 text-white" onClick={ handleUpdatePost }>Editar comentario</Button> }
            {!changePost && <p>{post.text}</p>}
            {changePost && 
            <>
                <form onSubmit={ handleUpdateSubmit }>
                    <label htmlFor="text"></label>
                    <input id="text"></input>
                    <button type="submit">Publicar</button>
                </form>
                <time className="block text-right text-xs">{post.date}</time>
                {post.author.id === logic.getLoggedInUserId() && <div>
                    <Button className="border-2 border-solid border-white bg-green-500 text-white" onClick={handleCancelChange}>Cancelar</Button>
                </div>}
            </>
            }       
        </article>
    )
}

export default Post;