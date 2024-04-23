import logic from "../logic"
import Button from "./Button"
import Form from "./Form"
import Input from "./Input"

function CreatePost({ onPostCreated, onCancelCreatePostClick }) {
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            logic.createPost(image, text)
                .then(() => onPostCreated())
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })

        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    const handleCancelCreatePostClick = () => {
        onCancelCreatePostClick()
    }
    return <>
        <section id="create-post-section" className=" mb-10  fixed bottom-0 bg-slate-500 w-full pb-3">
            <h2>Create post</h2>

            <Form className=" flex  flex-col" id="create-post-form" onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <Input id="image" />

                <label htmlFor="text">Text</label>
                <Input id="text" />

                <Button type="submit">Create Post</Button>
            </Form>

            <Button onClick={handleCancelCreatePostClick} id="create-post-cancel-button">Cancel create post</Button>
        </section>
    </>
}

export default CreatePost
