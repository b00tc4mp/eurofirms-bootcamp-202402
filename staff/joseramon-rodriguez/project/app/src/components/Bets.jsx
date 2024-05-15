import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { errors } from 'com'
import Button from '../components/Button'
import logic from '../logic'

function Bets() {
    const [bets, setBets] = useState(null)

    const navigate = useNavigate()

    const params = useParams()

    useEffect(() => {
        try {
            logic.retrieveBetsFromUser(params.userId)
                .then(bets => setBets(bets))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }, [])

    const handleBetClick = betId => {
        navigate(`/bet/${betId}`)
    }
    return <>

        <h2>Your bets</h2>
        {bets ? bets.map(bet => {
            return <section key={bet.id} className=' border-black border-2'>
                <h3><a onClick={() => handleBetClick(bet.id)}>{bet.event.name}</a></h3>
                <p>{bet.event.description}</p>
                <span>BET AMOUNT :{bet.amount}</span>
                <h4>Status: {bet.event.status}</h4>
            </section>

        }
        ) : <span>Loading</span>}
    </>

}

export default Bets