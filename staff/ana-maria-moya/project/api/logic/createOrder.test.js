import mongoose from 'mongoose'
import createOrder from './createOrder.js'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        try {
            createOrder('66390a8ea63805748f83bae3' , [{id: '6668279eda8dcbaf1aa5a169', quantity: 1}, 
                {id: '666970c57945ae2bcc742fe6', quantity: 1}
             ])
                .then(() => console.log('buys created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })