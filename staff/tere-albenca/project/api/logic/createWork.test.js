import mongoose from 'mongoose'
import createWork from './createWork.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            createWork(
                '663b38e14e3e1fbb606208d1',
                'exercise three',
                'https://www.linkedin.com/in/alalluna/overlay/background-image/',
                'ilustration diving')
                .then(() => console.log('work created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })