import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import logic from "../logic"
import Input from "./Input"
import Button from "./Button"
import Form from "./Form"
import { utils } from "com"

function Event() {
    let params = useParams()
    const [event, setEvent] = useState(null)
    const [timeStamp, setTimeStamp] = useState(null)
    const [eventStarted, setEventStarted] = useState(false)
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

    const handleSubmit = event => {
        event.preventDefault()
    }
    return <>
        {timeStamp && <span>{timeStamp.toString()}</span>}
        {event ? <section>
            <div>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p>Start : {utils.formatDate(event.startDate)}</p>
                <ul>
                    {event.players.map(player => { return <li key={player.name}>{player.name}</li> })}
                </ul>
            </div>
            <div>
                {!eventStarted && <Form onSubmit={handleSubmit}>
                    <label htmlFor="amount">Amount to bet</label>
                    <Input type="text"></Input>
                    <Button type="submit">Bet</Button>
                    <select name="player" id="player" key='123'>
                        {event.players.map(player => { return <option key={player.id} value={player.id}>{player.name}</option> })}
                    </select>
                </Form>}

            </div>
        </section> : <span>loading...</span>}
    </>
}

export default Event