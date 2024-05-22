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
    const [error, setError] = useState(false)

    let params = useParams()
    const navigate = useNavigate()

    const errorHandler = error => {
        console.error(error)

        let feedback = error.message

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback}, please correct it`
        else if (error instanceof MatchError)
            feedback = `${feedback}, please input correct data`
        else feedback = 'sorry there was an error, please try again later'

        const isAmountError = error.message.includes('amount')

        const isAnotherError = !isAmountError

        setError({ message: feedback, isAmountError, isAnotherError })
    }

    useEffect(() => {
        try {
            logic.retrieveBet(params.betId)
                .then(bet => {
                    setBet(bet)
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
            const eventStartDate = new Date(bet?.event.startDate).getTime()

            if (timeStamp <= eventStartDate)
                setEventStarted(true)
            else
                setEventStarted(false)

            setTimeStamp(timeStamp)
        }, 1000)
    }, [timeStamp])

    const handleSubmit = formEvent => {
        try {
            formEvent.preventDefault()

            const form = formEvent.target

            const amount = Number(form.amount.value)

            logic.modifyBet(bet.id, amount)
                .then(() => {
                    console.log('Bet modified -> navigate to home')
                    onBetModified()
                    navigate('/')
                })
                .catch(error => errorHandler(error))
        } catch (error) {
            errorHandler(error)
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
                    .catch(error => errorHandler(error))
            }
        } catch (error) {
            errorHandler(error)
        }
    }

    return <>
        {bet ? <section className=" flex  flex-none justify-between">
            <div className=" max-w-30">
                <h2 className=" text-xl">Event name: {bet.event.name}</h2>
                <p>Event description: {bet.event.description}</p>
                <p>Start: {utils.formatDate(bet.event.startDate)}</p>
                <h3>Status : {bet.event.status}</h3>
                <p className=" text-lg">Player you bet for: {bet.player.name}</p>
                <p className=" text-lg">Amount you betted : {bet.amount}</p>
            </div>
            <div className=" max-w-20 flex flex-col">
                {eventStarted && <>
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor="amount">New amount to bet</label>
                        <Input type="text" id="amount"></Input>
                        <Button type="submit">Modify</Button>
                        {error?.isAmountError && <span className='text-red-500'>{error.message}</span>}
                    </Form>
                    <Button className=" self-end w-full" onClick={handleDeleteClick}>Delete</Button>
                </>
                }
            </div>
        </section> : error?.isAnotherError && <span className='text-red-500'>{error.message}</span>}

    </>
}

export default Bet