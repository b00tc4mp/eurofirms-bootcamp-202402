import logic from "../../logic/index.js"
function EditPost({ post, handleUpdatedPost, handleCancel }) {
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const text = form.text.value

        try {
            logic.updatePost(post.id, text)
                .then(() => handleUpdatedPost())
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })


        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }
    const onCancelClick = () => handleCancel()
    return <>
        <form className="post-form" onSubmit={handleSubmit}>
            <label htmlFor="text"></label>
            <input className="input" type="text" id="text" defaultValue={post.text} />

            <button className="button button-right" type="submit">Update</button>
        </form >

        <button className="button" onClick={onCancelClick}>Cancel</button>
    </>

}
export default EditPost