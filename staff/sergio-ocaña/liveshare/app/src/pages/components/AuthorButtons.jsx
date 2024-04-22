import logic from "../../logic"
function AuthorButtons({ handleEdit, handleDeletedClick, postId }) {
    const onEditClick = () => handleEdit()
    const onDeleteClick = () => {
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
        <button className="button button-edit" onClick={onEditClick}>✏️</button>
        <button className="button button-delete" onClick={onDeleteClick}>🗑️</button>
    </>
}
export default AuthorButtons