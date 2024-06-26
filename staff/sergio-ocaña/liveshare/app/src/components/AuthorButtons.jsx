import { Button } from "."


function AuthorButtons({ handleEdit, handleDeletedClick }) {
    const onEditClick = () => {
        handleEdit()
    }

    const onDeleteClick = () => {
        handleDeletedClick()
    }
    return <>
        <Button onClick={onEditClick}>✏️</Button>
        <Button onClick={onDeleteClick}>🗑️</Button>
    </>
}
export default AuthorButtons