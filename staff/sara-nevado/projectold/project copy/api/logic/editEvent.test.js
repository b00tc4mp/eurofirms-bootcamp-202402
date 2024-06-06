import mongoose from 'mongoose';
import editEvent from './editEvent.js';

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        const eventId = '6654a46718137df107df65b0';

        const eventData = {
            userId: '6654995d1caad8e1f24fddc7',
            type: 'event',
            title: 'hoal',
            date: '2024-05-29T10:00', 
            duration: 2,
            address: 'c/sol, nº2',
            description: 'Nuevo evento nuevo evento',
        };

        editEvent(eventId, eventData)
            .then(() => console.log('Event updated'))
            .catch(error => console.error('Error updating event:', error));
    })
    .catch(error => console.error('Database connection error:', error));

