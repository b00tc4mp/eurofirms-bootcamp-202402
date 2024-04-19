import logic from "../../logic/index.js"
function CreatePost({ onSendClick, onCancelCreateClick }) {
    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            logic.createPost(image, text)
                .then(() => onSendClick())
                .catch(error => { throw new Error(error.message) })

        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    const handleCancelCreateClick = (event) => {
        event.preventDefault()

        onCancelCreateClick()
    }


    return <section id="create-post-section">
        <h2>Create Post</h2>

        <form id="create-post-form" onSubmit={handleSubmit}>
            <label htmlFor="image">Image</label>
            <input className="input" type="text" id="image" />

            <label htmlFor="text">Text</label>
            <input className="input" type="text" id="text" />

            <button className="button button--right" type="submit">Create</button>
        </form>

        <button className="button button--center" id="create-post-cancel-button" onClick={handleCancelCreateClick}>Cancel</button>
    </section>
}
export default CreatePost