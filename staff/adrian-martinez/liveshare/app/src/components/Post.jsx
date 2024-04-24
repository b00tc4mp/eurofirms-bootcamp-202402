import logic from "../logic"
import Button from "./Button";

function Post({ post, onPostDeleted}){
    
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

    console.debug("Post render");

    return (
        <article className="border-2 border-solid border-black m-10">
            <h3 className="p-2">{ post.author.username }</h3>
            <img src={post.image} className="w-full hover:w-5/6"/>
            <p className="p-2">{ post.text }</p>
            <time className="block text-right text-xs">{ post.date }</time>
            {/* No se puede hacerlo con un if porque la condición tiene que devolver algo a la fuerza. 
                los if no devuelven, solo cambian.
                
                if(post.author.id === post.id){
                <button className="" onClick={ () => deletePost(post.id) }></button>
            }  */}
            
            { post.author.id === logic.getLoggedInUserId() && <Button className="border-2 border-solid border-white bg-red-500 text-white" onClick={ handleDeletePost }>Borrar</Button> }
        </article>
    )
}

export default Post;