import { useState } from "react"
import logic from "../logic"
import Button from "./Button"

function Career({ career, onCareerDeleted, onCareerUpdate }){

    const handleDeleteCareer = () => {

        const deleteConfirmed = confirm("Delete ??????")
        
        if(!deleteConfirmed) return;
        
        //logic.getLoggedInUserId(), Le quitamos este parámetro porque la sesión la cogemos desde la API
        try{
            logic.deleteCareer( career.id)
            .then(() => {onCareerDeleted()})
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

    const [changeCareer, setChangeCareer] = useState(false);

    const handleUpdateSubmit = event => {
        event.preventDefault();

        const form = event.target

        const title = form.title.value;
        const description = form.description.value;
        const certification = form.certification.value;

        const updateConfirmed = confirm("Confirm changes ??????");
        
        if(!updateConfirmed) return;
        
        try{
            logic.updateCareer(career.id, title, description, certification)
                .then(() => {
                    onCareerUpdate();
                    setChangeCareer(false)

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

        setChangeCareer(false);
    }

    console.debug("Career render");

    console.log(career)

    return (
        <article className="border-2 border-solid border-black m-10">
            <h2 className="p-2 text-3xl font-bold">{ career.title }</h2>
            <img src={career.certification} className="md:sm w-80 h-60"/>
            <p className="p-2">{ career.description}</p>
            
            { career.student.id === logic.getLoggedInUserId() && 
                <div>
                    <Button className="border-2 border-solid border-white bg-red-500 text-white" onClick={ handleDeleteCareer }>Borrar</Button>
                </div>
            }
        
            {!changeCareer && career.student.id === logic.getLoggedInUserId() && 

                <Button className="border-2 border-solid border-white bg-green-500 text-white" onClick={()=> setChangeCareer(true)}>Editar estudio</Button>
           
            }
            {changeCareer && 
            <>
                <form onSubmit={ handleUpdateSubmit }>
                    <label htmlFor="title">Título</label>
                    <input type="text" defaultValue={career.title} name="title" />

                    <label htmlFor="description">Descripción</label>
                    <input type="text" defaultValue={career.description} name="description" />

                    <label htmlFor="certification">Certificación:</label>
                    <input defaultValue={career.certification} name="certification" />

                    <br/><button type="submit">Publicar</button>
                    <button onClick={handleCancelEdit}>Cancelar</button>
                </form>
            </>
            }
            
        </article>
    )
}

export default Career;