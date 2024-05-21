import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import logic from "../logic"
import Input from "./Input"
import Button from "./Button"
import Form from "./Form"
import { utils, errors } from "com"

const { MatchError, ContentError } = errors

function Event({ onBetCreated }) {
    let params = useParams()
    const [event, setEvent] = useState(null)
    const [timeStamp, setTimeStamp] = useState(null)
    const [eventStarted, setEventStarted] = useState(false)
    const [error, setError] = useState(false)

    const errorHandler = error => {
        console.error(error)

        let feedback = error.message

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback}, please correct it`
        else if (error instanceof MatchError)
            feedback = `${feedback}, please input correct data`
        else feedback = 'sorry there was an error, please try again later'

        const isPlayerError = error.message.includes('player')
        const isAmountError = error.message.includes('amount')

        const isAnotherError = !isPlayerError && !isAmountError

        setError({ message: feedback, isPlayerError, isAmountError, isAnotherError })
    }

    const navigate = useNavigate()

    useEffect(() => {
        try {
            logic.retrieveEvent(params.eventId)
                .then(event => {
                    setEvent(event)
                    setTimeStamp(new Date())
                })
                .catch(error => errorHandler(error))
        } catch (error) {
            errorHandler(error)
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
                    errorHandler(error)
                })
        } catch (error) {
            errorHandler(error)
        }
    }
    return <>
        {event ? <section>
            <div>
                <h2>Status: {event.status}</h2>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p>Start : {utils.formatDate(event.startDate)}</p>
                {event.winner ? <p>Winner: {event.winner.name}</p> : <></>}
                <p>List of players:</p>
                <ul>
                    {event.players.map(player => { return <li key={player.name}>{player.name}</li> })}
                </ul>
            </div>
            <div>
                {!eventStarted && event?.status === 'open' && <Form onSubmit={handleSubmit}>
                    <label htmlFor="player">Player to bet</label>
                    <select name="player" id="player" key='123'>
                        {event.players.map(player => { return <option key={player.id} value={player.id}>{player.name}</option> })}
                    </select>
                    {error?.isPlayerError && <span className='text-red-500'>{error.message}</span>}

                    <label htmlFor="amount">Amount to bet</label>
                    <Input type="text" id="amount"></Input>
                    {error?.isAmountError && <span className='text-red-500'>{error.message}</span>}

                    <Button type="submit">Bet</Button>
                    {error?.isAnotherError && <span className='text-red-500'>{error.message}</span>}

                </Form>}

            </div>
        </section> : <span>loading...</span>}
    </>
}

export default Event