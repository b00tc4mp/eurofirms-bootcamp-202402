import mongoose from 'mongoose';
import editEvent from './editEvent.js';

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        const userId = '665ec7f646f036d9d812fc1b';
        const eventId = '66605a19bdd41d5b484bac8d';
        

        const eventData = {
            type: 'event',
            title: 'hoa',
            date: '2024-06-24T13:31',
            duration: 2,
            address: 'c/sol, nº2',
            description: 'nuevo evento',
        };

        editEvent(userId, eventId, eventData)
            .then(() => console.log('Event updated'))
            .catch(error => console.error('Error updating event:', error));
    })
    .catch(error => console.error('Database connection error:', error));

