import { useState } from "react";
import logic from "../logic"
import Button from "./Button";

function Offer({ offer, onOfferDeleted }){

    const handleDeleteCareer = () => {

        const deleteConfirmed = confirm("Delete ??????")
        
        if(!deleteConfirmed) return;
        
        try{
            logic.deleteOffer(offer.id)
            .then(() => {onOfferDeleted()})
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

    //const [changePost, setChangePost] = useState(false);

    //const handleUpdatePost = () => setChangePost(true);

    /* const handleUpdateSubmit = event => {
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
    } */

    const handleShowForm = () => {

        setChangeOffer(true);
    }
    
    const handleCancelChange = () => {

        setChangeOffer(false);
        
    } 

    console.debug("Career render");

    return (
        <article className="border-2 border-solid border-black m-10">
            <h3 className="p-2">{ offer.title }</h3>
            <h3 className="p-2">{ offer.description}</h3>
            <h3 className="p-2">{ offer.minSalary}</h3>
            <h3 className="p-2">{ offer.maxSalary}</h3>
            <h3 className="p-2">{ offer.fechaPublicacion}</h3>
            <h3 className="p-2">{ offer.fechaExpiracion}</h3>
            
            { offer.company.id === logic.getLoggedInUserId() && <Button className="border-2 border-solid border-white bg-red-500 text-white" onClick={ handleDeleteOffer }>Borrar</Button> }
            { offer.company.id === logic.getLoggedInUserId() && <div>
                    <Button className="border-2 border-solid border-white bg-green-500 text-white" onClick={handleCancelChange}>Cancelar</Button>
                </div>}
            {/* {post.author.id === logic.getLoggedInUserId() && <Button className="border-2 border-solid border-white bg-green-700 text-white" onClick={ handleUpdatePost }>Editar comentario</Button> }
            {!changePost && <p>{post.text}</p>}
            {changePost && 
            <>
                <form onSubmit={ handleUpdateSubmit }>
                    <label htmlFor="text"></label>
                    <input id="text"></input>
                    <button type="submit">Publicar</button>
                </form>
                <time className="block text-right text-xs">{post.date}</time> */}
                
            
        </article>
    )
}

export default Offer;