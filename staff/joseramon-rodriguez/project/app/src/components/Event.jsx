import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import logic from "../logic"
import Input from "./Input"
import Button from "./Button"
import Form from "./Form"
import { utils } from "com"

function Event({ onBetCreated }) {
    let params = useParams()
    const [event, setEvent] = useState(null)
    const [timeStamp, setTimeStamp] = useState(null)
    const [eventStarted, setEventStarted] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        try {
            logic.retrieveEvent(params.eventId)
                .then(event => {
                    setEvent(event)
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
            const eventStartDate = new Date(event?.startDate).getTime()

            if (timeStamp >= eventStartDate)
                setEventStarted(true)

            setTimeStamp(timeStamp)
        }, 1000)
    }, [timeStamp])

    const handleSubmit = formEvent => {
        try {
            formEvent.preventDefault()

            const form = formEvent.target

            const player = form.player.value

            const amount = Number(form.amount.value)

            logic.createBet(event.id, player, amount)
                .then(() => {
                    console.log('Bet created -> navigate to home')
                    onBetCreated()
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
    return <>
        {event ? <section>
            <div>
                <h2>Status: {event.status}</h2>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p>Start : {utils.formatDate(event.startDate)}</p>
                <p>List of players:</p>
                <ul>
                    {event.players.map(player => { return <li key={player.name}>{player.name}</li> })}
                </ul>
            </div>
            <div>
                {!eventStarted && <Form onSubmit={handleSubmit}>
                    <label htmlFor="player">Player to bet</label>
                    <select name="player" id="player" key='123'>
                        {event.players.map(player => { return <option key={player.id} value={player.id}>{player.name}</option> })}
                    </select>
                    <label htmlFor="amount">Amount to bet</label>
                    <Input type="text" id="amount"></Input>
                    <Button type="submit">Bet</Button>
                </Form>}

            </div>
        </section> : <span>loading...</span>}
    </>
}

export default Event