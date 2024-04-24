import logic from "../../logic/index.js"
import Form from "./Form.jsx"
import Button from "./Button.jsx"
import LabelInput from "./LabelInput.jsx"
import HTag from "./HTags.jsx"

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


    return <section className="mb-8 fixed bottom-0 left-0 bg-white w-full pb-2 border-t-2 border-black flex flex-col box-border px-2">
        <HTag level={2}>Create Post</HTag>

        <Form onSubmit={handleSubmit}>

            <LabelInput text="Text" id="text" />

            <LabelInput text="Image" type="text" id="image" />

            <Button type="submit">Create</Button>
        </Form>

        <Button className="w-full text-center" onClick={handleCancelCreateClick}>Cancel</Button>
    </section>
}
export default CreatePost