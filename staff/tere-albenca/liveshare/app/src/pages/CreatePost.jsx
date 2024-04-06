import logic from "../logic"

function CreatePost(props){
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target 
        
        const image = form.image.value 
        const text = form.text.value 

        try{
            logic.createPost(image, text)

            props.onPostCreated()
        }catch(error){
            console.error(error)
            alert(error.message)
        }
    }

    return <>
        <section id="create-post-section" className="create-post-section">
        <h2>CREATE POST</h2>
        <form id="create-post-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="image" id="image"/>

            <input type="text" placeholder="text" id="text"/>

            <button type="submit">create</button>

        </form>

        <button id="create-post-cancel-button">cancel</button>
    </section>
    </>
}

export default CreatePost