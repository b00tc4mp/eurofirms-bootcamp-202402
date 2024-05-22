// import mongoose from 'mongoose'
// import calculateBetWinnersAndPayBack from './calculateBetWinnersAndPayBack.js'


import { CronJob } from 'cron'
import * as cron from 'cron';

const dt = cron.sendAt('0 0 * * *')

console.log(`The job would run at: ${dt.toISO()}`)

const job = new CronJob(
    dt, // cronTime
    function () {
        PayWinnersAndPayBack()
    }, // onTick
    null, // onComplete
    true, // start
    'America/Los_Angeles' // timeZone
)

const PayWinnersAndPayBack = () => {
    mongoose.connect('mongodb://localhost:27017/project')
        .then(() => {
            try {
                calculateBetWinnersAndPayBack()
                    .then(() => console.log('calculate bet winners and pay back completed'))
                    .catch(error => console.error(error))
            } catch (error) {
                console.error(error)
            }
        })
        .catch(error => console.error(error))

}