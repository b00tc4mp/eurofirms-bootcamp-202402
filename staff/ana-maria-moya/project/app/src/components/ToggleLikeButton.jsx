import { IconButton } from "@material-tailwind/react";

function ToggleLikeButton({ isLiked, onClick = { onClick } }) {
  return isLiked ?
    <IconButton onClick={onClick} color="red">
        <i className="fas fa-heart" />
        <img src="me-gusta.png"/>
      </IconButton>
    :
    <IconButton variant="outlined" onClick={onClick}>
      <i className="fas fa-heart" />
      <img src="me-gusta.png" />
    </IconButton>
}
export default ToggleLikeButton