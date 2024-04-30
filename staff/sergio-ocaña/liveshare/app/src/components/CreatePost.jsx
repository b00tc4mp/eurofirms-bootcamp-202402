import logic from "../logic/index.js"
import Form from "./Form.jsx"
import Button from "./Button.jsx"
import LabelInput from "./LabelInput.jsx"
import HTag from "./HTags.jsx"
import { errors } from 'com'
import SpanError from "./SpanError.jsx"
import { useState } from "react"

const { ContentError, MatchError } = errors

function CreatePost({ onSendClick, onCancelCreateClick }) {
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

    const handleSubmit = (event) => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            logic.createPost(image, text)
                .then(() => onSendClick())
                .catch(error => errorHandler(error))

        } catch (error) {
            errorHandler(error)
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
            {error?.isTextError && <SpanError>{error.message}</SpanError>}

            <LabelInput text="Image" type="text" id="image" />
            {error?.isImageError && <SpanError>{error.message}</SpanError>}

            <Button type="submit">Create</Button>
        </Form>

        <Button className="w-full text-center" onClick={handleCancelCreateClick}>Cancel</Button>
    </section>
}
export default CreatePost