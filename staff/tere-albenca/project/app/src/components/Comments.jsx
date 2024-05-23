import React from 'react';
import CreateComment from './CreateComment';
import logic from '../logic';

function Comments({ workId, comments, userRole, onCommentCreated, onCommentEdit, onCommentDelete }) {
    const handleCommentCreated = () => {
        onCommentCreated();
    };

    const handleUpdateComment = (commentId, newText) => {
        try {
            logic.updateComment(workId, commentId, newText)
                .then(() => {
                    onCommentEdit(commentId, newText);
                })
                .catch(error => {
                    console.error(error);
                    let feedback = error.message || 'Sorry, there was an error. Please try again later.';
                    alert(feedback);
                });
        } catch (error) {
            console.error(error);
            let feedback = error.message || 'Sorry, there was an error. Please try again later.';
            alert(feedback);
        }
    };

    const handleRemoveComment = (commentId) => {
        try {
            if (confirm('Delete comment?')) {
                logic.removeComment(workId, commentId)
                    .then(() => {
                        onCommentDelete(commentId);
                    })
                    .catch(error => {
                        console.error(error);
                        let feedback = error.message || 'Sorry, there was an error. Please try again later.';
                        alert(feedback);
                    });
            }
        } catch (error) {
            console.error(error);
            let feedback = error.message || 'Sorry, there was an error. Please try again later.';
            alert(feedback);
        }
    };

    return (
        <div>
            <h2>Comments</h2>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <p>{comment.text}</p>
                    {userRole === 'teacher' && (
                        <>
                            <button onClick={() => handleUpdateComment(comment.id, 'New Text')}>Edit</button>
                            <button onClick={() => handleRemoveComment(comment.id)}>Delete</button>
                        </>
                    )}
                </div>
            ))}
            {userRole === 'teacher' && (
                <CreateComment workId={workId} onCommentCreated={handleCommentCreated} />
            )}
        </div>
    );
}

export default Comments;
