import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { errors } from "com"
import logic from '../logic'
import Header from './Header'
import CareersStudent from './CareersStudent'
import OffersCompany from './OffersCompany'

const { ContentError, MatchError } = errors

function Profile() {
    const [user, setUser] = useState(null);
    const [refreshStamp, setRefreshStamp] = useState(null);

    const { targetUserId } = useParams()
    console.log(targetUserId)

    useEffect(() => {
        try {
            logic.retrieveUser(targetUserId)
                .then(user => setUser(user))
                .catch(error => {
                    console.error(error.message)

                    let feedback = error.message

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback}, please correct it`
                    else if (error instanceof MatchError)
                        feedback = `${feedback}, please verify user`
                    else
                        feedback = 'sorry, there was an error, please try again later'

                    alert(feedback)
                })
        } catch (error) {
            console.error(error.message)

            let feedback = error.message

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback}, please correct it`
            else
                feedback = 'sorry, there was an error, please try again later'

            alert(feedback)
        }
    }, [])

    const role = user?.role;

    return (
        <>
        {
            role === "student" ?

            <>
            <Header className="header" role={role}></Header>
            <main>
                <container id="container">
                    <section>
                        {!user && <p>Loading...</p>}
                        {user && 
                        <>
                            <h1 className="text-3xl font-bold">{user.name} {user.surnames}</h1><br/>
                            <h1 className="text-xl">Edad: {user.age}</h1>
                            <h1 className="text-xl ">Correo: {user.email}</h1>
                        </>
                        }
                        
                    </section>
                    <section>
                        
                        <CareersStudent refreshStamp={ refreshStamp }/>
                    </section>
                </container>
            </main>
            <footer className="footer">
                
            </footer>
        
        </>
        : 
        <>
            <Header className="header" role={role}></Header>
            <main>
                <container id="container">
                        <section>
                            {!user && <p>Loading...</p>}
                            {user && 
                            <>
                                <h1 className="text-3xl font-bold">Admin de {user.name}</h1><br/>
                                <h1 className="text-xl ">Correo: {user.email}</h1>
                            </>
                            }

                        </section>
                        <section>
                       
                        <OffersCompany refreshStamp={ refreshStamp }/>
                    </section>
                </container>
            </main>
            <footer className="footer">
                
            </footer>
        </>
        }
    </>
    )
}

export default Profile;