import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import logic from "../logic"
import Input from "./Input"
import Button from "./Button"
import Form from "./Form"
import { utils } from "com"

function Bet({ onBetModified, onBetRemoved }) {
    const [bet, setBet] = useState(null)
    const [timeStamp, setTimeStamp] = useState(null)
    const [eventStarted, setEventStarted] = useState(false)

    let params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            logic.retrieveBet(params.betId)
                .then(bet => {
                    setBet(bet)
                    setTimeStamp(new Date())
                })
        } catch (error) {
            alert(error.message)
            console.error(error
            )
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            const timeStamp = new Date().getTime()
            const eventStartDate = new Date(bet?.event.startDate).getTime()

            if (timeStamp >= eventStartDate)
                setEventStarted(true)

            setTimeStamp(timeStamp)
        }, 1000)
    }, [timeStamp])

    const handleSubmit = formEvent => {
        try {
            formEvent.preventDefault()

            const form = formEvent.target

            const amount = Number(form.amount.value)

            logic.modifyBet(bet.id, amount)//modifyBet
                .then(() => {
                    console.log('Bet modified -> navigate to home')
                    onBetModified()
                    navigate('/')
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    const handleDeleteClick = () => {
        try {
            const confirm = window.confirm('are you sure you want to delete this bet?')

            if (confirm) {
                logic.removeBet(bet.id)
                    .then(() => {
                        console.log('bet removed -> navigate to home')
                        navigate('/')
                        onBetRemoved()
                    })
            }
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }
    //TODO
    //implement and REMOVE BET
    return <>
        {timeStamp && <span>{timeStamp.toString()}</span>}
        {bet ? <section>
            <div>
                <h2>STATUS : {bet.event.status}</h2>
                <h3>Event name: {bet.event.name}</h3>
                <p>Event description: {bet.event.description}</p>
                <p>Start: {utils.formatDate(bet.event.startDate)}</p>
                <span>Player you bet for: {bet.player.name}</span>
                <span>Amount you betted : {bet.amount}</span>
            </div>
            <div>
                {!eventStarted && <>
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor="amount">Amount to bet</label>
                        <Input type="text" id="amount"></Input>
                        <Button type="submit">Modify</Button>
                    </Form>
                    <Button onClick={handleDeleteClick}>Delete Bet</Button> </>}
            </div>
        </section> : <span>loading...</span>}
    </>
}

export default Bet