import { useState } from "react"
import logic from "../logic"

function CreateComment({ postId, onCommentCreated }) {
    const [comment, setComment] = useState("")
    const [showForm, setShowForm] = useState(true)

    const handleSubmit = event => {
        event.preventDefault();

        try {
            logic.createComment(postId, comment)
                .then(() => {
                    onCommentCreated()
                    setComment("")
                   
                })
                .catch(error => {
                    console.error(error)

                    let feedback = error.message || 'Ha ocurrido un error. Por favor, intenta de nuevo.';
                    alert(feedback)
                });
        } catch (error) {
            console.error(error)

            let feedback = error.message || 'Ha ocurrido un error. Por favor, intenta de nuevo.';
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
                type="text"
                placeholder="Escribe tu comentario..."
                value={comment}
                onChange={handleCommentChange}
                />
                <button type="submit">Comentar</button>
            </form>
        )
    );
}

export default CreateComment