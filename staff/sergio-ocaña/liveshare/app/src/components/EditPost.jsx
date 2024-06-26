import LabelInput from "./LabelInput.jsx"
import Form from "./Form.jsx"
import Button from "./Button.jsx"
import SpanError from "./SpanError.jsx"

function EditPost({ post, textUpdated, error, handleCancel, onHandleSubmit }) {
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const text = form.text.value

        onHandleSubmit(post.id, text)
    }

    const onCancelClick = () => handleCancel()
    return <>
        <Form onSubmit={handleSubmit}>

            <LabelInput text="Text to update" id="text" defaultValue={textUpdated} />
            {error?.isTextError && <SpanError>{error.message}</SpanError>}
            <Button type="submit">Update</Button>
        </Form >

        <Button onClick={onCancelClick}>Cancel</Button>
    </>
}
export default EditPost