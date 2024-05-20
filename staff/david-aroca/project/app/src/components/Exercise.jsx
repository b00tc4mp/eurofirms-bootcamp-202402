import React, { useState } from 'react';
import logic from '../logic';

function extractYouTubeID(url) {
    if (!url) return null; // verifica si la URL es undefined o null
    const regExp = /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=|\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
        return match[2];
    } else {
        return null;
    }
}

function Exercise({ exercise, onExerciseRemoved, onExerciseModified }) {
    const [modify, setModify] = useState(false);

    const handleRemoveExercise = () => {
        try {
            if (confirm('Delete exercise?')) {
                logic.removeExercise(exercise.id)
                    .then(() => onExerciseRemoved(exercise.id))
                    .catch(error => {
                        console.log(error);
                        alert(error.message);
                    });
            }
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    };

    const handleModifyExercise = () => setModify(true);

    const handleModifySubmit = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const image = form.image.value;
        const video = form.video.value;
        const description = form.description.value;

        try {
            logic.modifyExercise(exercise.id, title, image, video, description)
                .then(() => {
                    onExerciseModified(exercise.id, title, image, video, description);
                    setModify(false);
                })
                .catch(error => {
                    console.log(error);
                    alert(error.message);
                });
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    };

    if (!exercise) {
        return <div>No exercise data available</div>;
    }

    const videoID = extractYouTubeID(exercise.video);

    return (
        <article className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
            <h3 className="font-bold text-xl mb-2">{exercise.title}</h3>
            {exercise.image && <img src={exercise.image} className="w-full rounded mb-2" alt={exercise.title} />}
            {videoID && (
                <div className="relative pb-[56.25%] h-0 overflow-hidden mb-4">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${videoID}`}
                        title="Exercise Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </div>
            )}
            {!modify ? (
                <>
                    <p className="whitespace-pre-line">{exercise.description}</p>
                    <p className="text-sm text-gray-600">Video: {exercise.video}</p>
                </>
            ) : (
                <form onSubmit={handleModifySubmit} className="flex flex-col">
                    <input type="text" name="title" defaultValue={exercise.title} className="border-b-2 border-black mb-2" />
                    <input type="text" name="image" defaultValue={exercise.image} className="border-b-2 border-black mb-2" />
                    <input type="text" name="video" defaultValue={exercise.video} className="border-b-2 border-black mb-2" />
                    <textarea name="description" defaultValue={exercise.description} className="border-b-2 border-black mb-2 h-24 resize-none font-serif"></textarea>
                    <button type="submit" className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">Save</button>
                </form>
            )}
            <div className="flex justify-end space-x-2">
                {modify ? (
                    <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => setModify(false)}>Cancel</button>
                ) : (
                    <>
                        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleModifyExercise}>📝 Modify</button>
                        <button className="bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleRemoveExercise}>🗑️ Remove</button>
                    </>
                )}
            </div>
        </article>
    );
}

export default Exercise;









// import React, { useState } from 'react';
// import logic from '../logic';

// function Exercise({ exercise, onExerciseRemoved, onExerciseModified }) {
//     const [modify, setModify] = useState(false);

//     const handleRemoveExercise = () => {
//         try {
//             if (confirm('Delete exercise?')) {
//                 logic.removeExercise(exercise.id)
//                     .then(() => onExerciseRemoved(exercise.id))
//                     .catch(error => {
//                         console.log(error);
//                         alert(error.message);
//                     });
//             }
//         } catch (error) {
//             console.log(error);
//             alert(error.message);
//         }
//     };

//     const handleModifyExercise = () => setModify(true);

//     const handleModifySubmit = event => {
//         event.preventDefault();

//         const form = event.target;

//         const title = form.title.value;
//         const image = form.image.value;
//         const video = form.video.value;
//         const description = form.description.value;

//         try {
//             logic.modifyExercise(exercise.id, title, image, video, description)
//                 .then(() => {
//                     onExerciseModified(exercise.id, title, image, video, description);
//                     setModify(false);
//                 })
//                 .catch(error => {
//                     console.log(error);
//                     alert(error.message);
//                 });
//         } catch (error) {
//             console.log(error);
//             alert(error.message);
//         }
//     };

//     if (!exercise) {
//         return <div>No exercise data available</div>;
//     }

//     return (
//         <article className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
//             <h3 className="font-bold text-xl mb-2">{exercise.title}</h3>
//             <img src={exercise.image} className="w-full rounded mb-2" alt={exercise.title} />
//             {!modify ? (
//                 <>
//                     <p>{exercise.description}</p>
//                     <p className="text-sm text-gray-600">Video: {exercise.video}</p>
//                 </>
//             ) : (
//                 <form onSubmit={handleModifySubmit} className="flex flex-col">
//                     <input type="text" name="title" defaultValue={exercise.title} className="border-b-2 border-black mb-2" />
//                     <input type="text" name="image" defaultValue={exercise.image} className="border-b-2 border-black mb-2" />
//                     <input type="text" name="video" defaultValue={exercise.video} className="border-b-2 border-black mb-2" />
//                     <input type="text" name="description" defaultValue={exercise.description} className="border-b-2 border-black mb-2" />
//                     <button type="submit" className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">Save</button>
//                 </form>
//             )}
//             <div className="flex justify-end space-x-2">
//                 {modify ? (
//                     <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => setModify(false)}>Cancel</button>
//                 ) : (
//                     <>
//                         <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleModifyExercise}>📝 Modify</button>
//                         <button className="bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleRemoveExercise}>🗑️ Remove</button>
//                     </>
//                 )}
//             </div>
//         </article>
//     );
// }

// export default Exercise;
