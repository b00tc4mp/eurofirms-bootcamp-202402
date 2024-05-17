import { useState, useEffect } from 'react'
import { errors } from "com"
import logic from '../logic'

const { ContentError, MatchError } = errors

function HomeEmpresa(props) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        try {
            logic.retrieveUser()
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

    const handleLogout = () => {
        logic.logoutUser()

        props.onClickInicio()
    }
    return (
    <>
        <header className="header">
            <div id="app" onClick={props.onClickInicio}>FormativeLife</div>
            <span className="mx-100">Prueba</span>
            <div className="titular"><i>Busca o atrae talento</i></div>
            <div id="area-perfil">
                <button className="login" onClick={handleLogout}>Cerrar Sesión</button>
            </div>
            <div id="area-buscador">
                <form className="form">
                    <button className="buscar"  onClick={props.onClickListarUsers}>Buscar estudiantes</button>
                </form>
            </div>
        </header>
        <main>
            <container id="container">
                    <section>
                        {!user && <p>Loading...</p>}
                        {user && 
                        <>
                            <h1 className="text-3xl font-bold">Hola {user.name} {user.surname}!</h1>
                            <h1 className="text-xl ">Tu correo es {user.email}</h1>
                        </>
                        }
                    </section>
                    <section>
                    <div className="mr-40">
                        <button className="button" onClick={ handleCreateCareerClick }>Añadir estudios ➕</button>
                    </div>
                    <OffersCompany refreshStamp={ refreshStamp }/>
                </section>

            {view === 'create-career' && <CreateOffer onCancelClick={handleCreateCareerCancelClick} onCreateCareer={handleOfferCreated} />}
            </container>
        </main>
        <footer className="footer">
            <button className="button mr-60" onClick={props.onClickInicio}>Página principal 🏚️</button>
        </footer>
    </>
    )
}

export default HomeEmpresa;