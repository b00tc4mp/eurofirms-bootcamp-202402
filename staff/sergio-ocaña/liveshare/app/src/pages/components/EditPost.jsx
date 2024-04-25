import logic from "../../logic/index.js"
import LabelInput from "./LabelInput.jsx"
import Form from "./Form.jsx"
import Button from "./Button.jsx"

function EditPost({ post, textUpdated, handleUpdatedPost, handleCancel }) {

    console.log(textUpdated)
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
        <Form onSubmit={handleSubmit}>

            <LabelInput text="Text to update" id="text" defaultValue={textUpdated} />

            <Button type="submit">Update</Button>
        </Form >

        <Button onClick={onCancelClick}>Cancel</Button>
    </>
}
export default EditPost