import { useState, useEffect } from "react";
import logic from "../logic";
import Work from "./Work";
import { errors } from 'com'


const { MatchError, ContentError } = errors

function Works({ refreshStamp, user, onProfileClick }) {
    console.log('refreshStamp', refreshStamp)

    const [works, setWorks] = useState([])

    const handleProfileClick = (userTargetId) => {
        onProfileClick(userTargetId);
      };

    const refreshWorks = (() => {
        try {
            logic.retrieveWorks()
                .then(works => setWorks(works))
                .catch(error => {
                    console.error(error)

                    let feedback = error.message

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback},please correct it`

                    else if (error instanceof MatchError)
                        feedback = `${feedback},please verify credentials`

                    else
                        feedback = 'sorry, there was an error, please try again later'

                    alert(feedback)
                })
        } catch (error) {
            console.error(error)

            let feedback = error.message

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback},please correct it`
            else
                feedback = 'sorry, there was an error, please try again later'

            alert(feedback)
        }
    })

    useEffect(() => {
        refreshWorks()
    }, [refreshStamp])

    const handleWorkRemoved = () => refreshWorks()

    const handleWorkEdit = () => refreshWorks()

    return <section className="flex flex-col gap-6 px-2 py-14">


        {works.map(work => 
            <Work 
                key={work.id} 
                work={work} 
                user={user} 
                onWorkRemoved={handleWorkRemoved} 
                onWorkEdit={handleWorkEdit} 
                onProfileClick={() => handleProfileClick(work.author.id)}
        />
        )}
    </section>
}

export default Works

