import { useState } from 'react'
import logic from '../logic'
import { errors } from 'com'

const { MatchError } = errors;

function CreateComment({ workId, onCommentCreated }) {
    const [comment, setComment] = useState('')
    const [showForm, setShowForm] = useState(true)

    const handleSubmit = event => {
        event.preventDefault()

        try {
            logic.createComment(workId, comment)
                .then(() => {
                    onCommentCreated()
                    setComment("")
                    setShowForm(false)
                })
                .catch(error => {
                    console.error(error)

                    let feedback = error.message || 'Ha ocurrido un error. Por favor, intenta de nuevo.'
                    alert(feedback)
                })
        } catch (error) {
            console.error(error)

            let feedback = error.message || 'Ha ocurrido un error. Por favor, intenta de nuevo.'
            alert(feedback)
        }
    }

    const handleCommentChange = event => {
        setComment(event.target.value)
    }

    return (
        showForm && (
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Write comment...'
                    value={comment}
                    onChange={handleCommentChange}
                />
                <button type='submit'>Add comment</button>
            </form>
        )
    );
}

export default CreateComment
