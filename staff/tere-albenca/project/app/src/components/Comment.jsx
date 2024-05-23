// Comment.jsx
import React from 'react';

function Comment({ comment, onEdit, onDelete }) {
    const handleEdit = () => {
        onEdit(comment.id);
    };

    const handleDelete = () => {
        onDelete(comment.id);
    };

    return (
        <div className="comment">
            <p>{comment.text}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Comment;
