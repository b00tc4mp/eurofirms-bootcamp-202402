import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import logic from "../logic"
import Input from "./Input"
import Button from "./Button"
import Form from "./Form"
import { utils } from "com"

function Bet({ onBetCreated }) {
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

            const player = form.player.value

            const amount = Number(form.amount.value)

            logic.createBet(event.id, player, amount)//modifyBet
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
    //TODO
    //implement modifyBET and REMOVE BET
    return <>
        {timeStamp && <span>{timeStamp.toString()}</span>}
        {bet ? <section>
            <div>
                <h3>{bet.event.name}</h3>
                <p>{bet.event.description}</p>
                <p>Start : {utils.formatDate(bet.event.startDate)}</p>
                <span>Player you bet for</span>
                <ul>
                    <li >{bet.player.name}</li>
                </ul>
                <span>Amount you betted : {bet.amount}</span>
            </div>
            <div>
                {!eventStarted && <>
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor="amount">Amount to bet</label>
                        <Input type="text" id="amount"></Input>
                        <Button type="submit">Modify</Button>
                    </Form>
                    <Button>Delete Bet</Button> </>}
            </div>
        </section> : <span>loading...</span>}
    </>
}

export default Bet