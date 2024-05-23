import { useState, useEffect } from 'react'
import logic from '../logic'
import Work from './Work'
import { errors } from 'com'

const { MatchError, ContentError } = errors

function UserWorks({ targetUserId, refreshStamp, user, onProfileClick, isProfilePage }) {
    console.log('refreshStamp', refreshStamp)
    console.log('targetUserId', targetUserId) // Verifica targetUserId 

    const [works, setWorks] = useState([])

    const handleProfileClick = (userTargetId) => {
        onProfileClick(userTargetId)
    }

    const refreshWorks = () => {
        try {
            logic.retrieveUsersWorks(targetUserId) //RetrieveUsersWorks y el targetUserId
                .then(works => {
                    // Obtén los comentarios
                    Promise.all(works.map(work => logic.retrieveComments(work.id)))
                        .then(comments => {
                            // Agregar los comentarios
                            const worksWithComments = works.map((work, index) => {
                                return { ...work, comments: comments[index] };
                            });
                            setWorks(worksWithComments);
                        })
                        .catch(error => console.error(error));
                })
                .catch(error => {
                    console.error(error);

                    let feedback = error.message;

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback}, please correct it`;

                    else if (error instanceof MatchError)
                        feedback = `${feedback}, please verify credentials`

                    else
                        feedback = 'sorry, there was an error, please try again later'

                    alert(feedback)
                });
        } catch (error) {
            console.error(error)

            let feedback = error.message

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback}, please correct it`
            else
                feedback = 'sorry, there was an error, please try again later'

            alert(feedback);
        }
    };

    useEffect(() => {
        refreshWorks();
    }, [refreshStamp, targetUserId])

    const handleWorkRemoved = () => refreshWorks()

    const handleWorkEdit = () => refreshWorks()

    return (
        <section className='flex flex-col gap-6 px-2 py-14'>
            {works.map(work =>
                <Work
                    key={work.id}
                    work={work}
                    user={user}
                    onWorkRemoved={handleWorkRemoved}
                    onWorkEdit={handleWorkEdit}
                    onProfileClick={() => handleProfileClick(work.author.id)}
                    userRole={user.role}
                    isProfilePage={isProfilePage}
                />
            )}
        </section>
    );
}

export default UserWorks
