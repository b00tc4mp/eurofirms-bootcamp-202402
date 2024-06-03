import { useState, useEffect } from 'react';
import logic from '../logic';
import Work from './Work';
import Comments from './Comments';
import { errors } from 'com';

const { MatchError, ContentError } = errors;

function UserWorks({ targetUserId, refreshStamp, user, onProfileClick, isProfilePage }) {
    console.log('refreshStamp', refreshStamp);
    console.log('targetUserId', targetUserId);

    const [works, setWorks] = useState([]);
    const [comments, setComments] = useState([]);

    const handleProfileClick = (userTargetId) => {
        onProfileClick(userTargetId);
    };

    const refreshWorks = async () => {
        try {
            const works = await logic.retrieveUsersWorks(targetUserId);
            const commentsArray = await Promise.all(works.map(work => logic.retrieveComments(work.id)));
            setWorks(works);
            setComments(commentsArray);
        } catch (error) {
            console.error(error);

            let feedback = error.message;

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback}, please correct it`;

            else if (error instanceof MatchError)
                feedback = `${feedback}, please verify credentials`;

            else
                feedback = 'sorry, there was an error, please try again later';

            alert(feedback);
        }
    };

    useEffect(() => {
        refreshWorks();
    }, [refreshStamp, targetUserId]);

    const handleWorkRemoved = () => refreshWorks();
    const handleWorkEdit = () => refreshWorks();

    const handleCommentsChanged = () => refreshWorks(); // Nueva función para refrescar comentarios

    return (
        <section className="flex flex-col gap-6 px-2 py-14">
            {works.map((work, index) => (
                <div key={work.id}>
                    <Work
                        work={work}
                        user={user}
                        onWorkRemoved={handleWorkRemoved}
                        onWorkEdit={handleWorkEdit}
                        onProfileClick={() => handleProfileClick(work.author.id)}
                        userRole={user.role}
                        isProfilePage={isProfilePage}
                    />
                    <Comments
                        workId={work.id}
                        comments={comments[index]}
                        user={user}
                        onCommentCreated={refreshWorks} // Actualiza los trabajos después de crear un comentario
                        onCommentsChanged={handleCommentsChanged} // Actualiza los comentarios después de un cambio
                    />
                </div>
            ))}
        </section>
    );
}

export default UserWorks;


// import { useState, useEffect } from 'react'
// import logic from '../logic'
// import Work from './Work'
// import Comments from './Comments'
// import { errors } from 'com'

// const { MatchError, ContentError } = errors;

// function UserWorks({ targetUserId, refreshStamp, user, onProfileClick, isProfilePage }) {
//     console.log('refreshStamp', refreshStamp)
//     console.log('targetUserId', targetUserId)

//     const [works, setWorks] = useState([])
//     const [comments, setComments] = useState([])

//     const handleProfileClick = (userTargetId) => {
//         onProfileClick(userTargetId)
//     };

//     const refreshWorks = () => {
//         try {
//             logic.retrieveUsersWorks(targetUserId)
//                 .then(works => {
//                     Promise.all(works.map(work => logic.retrieveComments(work.id)))
//                         .then(commentsArray => {
//                             setWorks(works);
//                             setComments(commentsArray); // Actualizar los comentarios
//                         })
//                         .catch(error => console.error(error));
//                 })
//                 .catch(error => {
//                     console.error(error);

//                     let feedback = error.message;

//                     if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
//                         feedback = `${feedback}, please correct it`;

//                     else if (error instanceof MatchError)
//                         feedback = `${feedback}, please verify credentials`;

//                     else
//                         feedback = 'sorry, there was an error, please try again later';

//                     alert(feedback);
//                 });
//         } catch (error) {
//             console.error(error);

//             let feedback = error.message;

//             if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
//                 feedback = `${feedback}, please correct it`;
//             else
//                 feedback = 'sorry, there was an error, please try again later';

//             alert(feedback);
//         }
//     };

//     const handleCommentEdit = (commentId, newText) => {
//         // Actualizar el estado de los comentarios
//         const updatedComments = comments.map(comment => {
//             if (comment.id === commentId) {
//                 return { ...comment, text: newText };
//             }
//             return comment;
//         });
//         setComments(updatedComments);
//     };

//     const handleCommentDelete = (commentId) => {
//         // Filtrar los comentarios para excluir el comentario eliminado
//         const updatedComments = comments.filter(comment => comment.id !== commentId);
//         setComments(updatedComments);
//     };

//     useEffect(() => {
//         refreshWorks();
//     }, [refreshStamp, targetUserId]);

//     const handleWorkRemoved = () => refreshWorks();

//     const handleWorkEdit = () => refreshWorks();

//     return (
//         <section className="flex flex-col gap-6 px-2 py-14">
//             {works.map((work, index) => ( // Añadimos un índice para acceder a los comentarios del mismo índice
//                 <div key={work.id}>
//                     <Work
//                         work={work}
//                         user={user}
//                         onWorkRemoved={handleWorkRemoved}
//                         onWorkEdit={handleWorkEdit}
//                         onProfileClick={() => handleProfileClick(work.author.id)}
//                         userRole={user.role}
//                         isProfilePage={isProfilePage}
//                     />
//                     {/* Renderizamos los comentarios */}
//                     <Comments
//                         workId={work.id}
//                         comments={comments[index]} // Pasamos los comentarios correspondientes al trabajo actual
//                         user={user} // Pasamos el objeto de usuario completo
//                         onCommentCreated={refreshWorks} // Actualizamos la lista de trabajos después de crear un comentario
//                         onCommentEdit={handleCommentEdit} // Implementa la lógica de edición si es necesario
//                         onCommentDelete={handleCommentDelete} // Implementa la lógica de eliminación si es necesario
//                     />
//                 </div>
//             ))}
//         </section>
//     );
// }

// export default UserWorks
