import { useState } from "react";
import logic from "../logic"
import Button from "./Button";
/* import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

var dateFormat = require('dateformat'); */

function Offer({ offer, onOfferDeleted, onOfferUpdate }){

    const handleDeleteOffer = () => {

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

    const [changeOffer, setChangeOffer] = useState(false);

    const handleUpdateSubmit = event => {
        event.preventDefault();

        const form = event.target

        const title = form.title.value;
        const description = form.description.value;
        const minSalary = parseFloat(form.minSalary.value);
        const maxSalary = parseFloat(form.maxSalary.value);
        const publishDate = form.publishDate.value;
        const expirationDate = form.expirationDate.value;

        const updateConfirmed = confirm("Confirm changes ??????");
        
        if(!updateConfirmed) return;
        
        try{
            logic.updateOffer(offer.id, title, description, minSalary, maxSalary, publishDate, expirationDate)
                .then(() => {
                    onOfferUpdate();
                    setChangeOffer(false);

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

    const handleCancelEdit = () => {

        setChangeOffer(false);
    }

    //const publishDateFormat = publishDate.getFullYear() + "-" + publishDate.getMonth() + "-" + publishDate.getDay();
    function formatDate(isDate){

        const fecha = new Date(isDate)

        return fecha.toLocaleDateString()
    }

    console.debug("Offer render");

    return (
        <article className="border-2 border-solid border-black m-10">
            <h2 className="p-2"><span className="font-extrabold">Puesto:</span> { offer.title }</h2>
            <h2 className="p-2"><span className="font-extrabold">Descripción:</span> { offer.description}</h2>
            <h2 className="p-2"><span className="font-extrabold">Salario:</span> { offer.minSalary}</h2>
            <h2 className="p-2"><span className="font-extrabold">Salario Máximo:</span> { offer.maxSalary}</h2>
            <h2 className="p-2"><span className="font-extrabold">Fecha de publicación:</span> { formatDate(offer.publishDate) }</h2>
            <h2 className="p-2"><span className="font-extrabold">Fecha de expiración (aprox):</span> { formatDate(offer.expirationDate) }</h2>
            
            { offer.company.id === logic.getLoggedInUserId() && 
                <div>
                    <Button className=" bg-red-500 text-white p-2 border-solid border-2 border-black" onClick={ handleDeleteOffer}>Borrar</Button>
                </div>
            }
             
            {!changeOffer && offer.company.id === logic.getLoggedInUserId() && <>
           
           <Button className="bg-green-500 text-white p-2 border-solid border-2 border-black" onClick={()=> setChangeOffer(true)}>Editar Oferta</Button>
           </>
           }
           {changeOffer && 
           <>
               <form onSubmit={ handleUpdateSubmit }>
                   <label htmlFor="title">Título</label>
                   <input type="text" defaultValue={offer.title} name="title" />

                   <label htmlFor="description">Descripción</label>
                   <input type="text" defaultValue={offer.description} name="description" />

                   <label htmlFor="minSalary">Salario:</label>
                   <input defaultValue={offer.minSalary} name="minSalary" />

                   <label htmlFor="maxSalary">Salario Máximo en esta categoría:</label>
                   <input defaultValue={offer.maxSalary} name="maxSalary" />

                   <label htmlFor="publishDate">Fecha publicación de la oferta:</label>
                   <input type="date" defaultValue={offer.publishDate/* dateFormat(offer.publishDate, "yyyy-mm-dd") */} name="publishDate" required/>

                   <label htmlFor="expirationDate">Fecha de expiración:</label>
                   <input type="date" defaultValue={offer.expirationDate} name="expirationDate" />

                   <br/><button type="submit">Publicar</button>
                   <button onClick={handleCancelEdit}>Cancelar</button>
               </form>
           </>
           }
           
       </article>
   )
}

export default Offer;