import logic from "../../logic"
import Button from "./Button"

function AuthorButtons({ handleEdit, handleDeletedClick, postId }) {
    const onEditClick = () => {
        handleEdit()
    }

    const onDeleteClick = () => {
        const deleteOrNot = confirm('Are you sure about to delete this post?')

        if (!deleteOrNot) return
        try {
            logic.deletePost(postId)
                .then(() => handleDeletedClick())
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })


        } catch (error) {
            error.message(error)

            alert(error.message)
        }
    }
    return <>
        <Button onClick={onEditClick}>✏️</Button>
        <Button onClick={onDeleteClick}>🗑️</Button>
    </>
}
export default AuthorButtons