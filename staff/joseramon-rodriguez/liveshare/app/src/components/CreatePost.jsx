import { useState } from "react"
import logic from "../logic"
import Button from "./Button"
import Form from "./Form"
import Input from "./Input"
import { errors } from 'com'

const { ContentError, MatchError } = errors

function CreatePost({ onPostCreated, onCancelCreatePostClick }) {
    const [error, setError] = useState(null)

    const errorHandler = error => {
        console.error(error)

        let feedback = error.message

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback}, please correct it`
        else if (error instanceof MatchError)
            feedback = `${feedback}, please try with a registered user`
        else
            feedback = 'sorry, there was an error, please try again later'

        if (error.message.includes('userId'))
            alert(feedback)

        const isImageError = error.message.includes('image')

        const isTextError = error.message.includes('text')

        setError({ message: feedback, isImageError, isTextError })
    }

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            logic.createPost(image, text)
                .then(() => onPostCreated())
                .catch(error => {
                    errorHandler(error)
                })

        } catch (error) {
            errorHandler(error)
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
                {error?.isImageError && <span className="text-red-500">{error.message}</span>}

                <label htmlFor="text">Text</label>
                <Input id="text" />
                {error?.isTextError && <span className="text-red-500">{error.message}</span>}

                <Button type="submit">Create Post</Button>
            </Form>

            <Button onClick={handleCancelCreatePostClick} id="create-post-cancel-button">Cancel create post</Button>
        </section>
    </>
}

export default CreatePost
