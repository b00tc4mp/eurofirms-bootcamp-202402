import logic from "../logic"

function CreatePost({ onCancelClick, onPostCreated }){
    
    const handleCancelClick = () => onCancelClick();

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const text = form.text.value;

        try{
            logic.createPost(image, text)
                .then(() => onPostCreated())
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

    console.debug("CreatePost render");

    return (
        <section className="container container--border-top create-post">
            <h2>Crear publicación</h2>

            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input className="input" type="text" id="image" />

                <label htmlFor="text">Text</label>
                <input className="input" type="text" id="text" />

                <button className="button button--right" type="submit">Publicar</button>
            </form>

            <button className="button--center" onClick={handleCancelClick}>Cancel</button>
        </section>
    )
}

export default CreatePost;