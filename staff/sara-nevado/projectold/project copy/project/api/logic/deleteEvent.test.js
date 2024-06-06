import mongoose from 'mongoose';
import deleteEvent from './deleteEvent.js';

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        const eventId = '66558270757f0b65fc3d674f'

        const userData = {
            userId: '6654995d1caad8e1f24fddc7'
        };

        deleteEvent({ userId: userData.userId, eventId })
            .then(() => console.log('Event deleted'))
            .catch(error => console.error('Error deleting event:', error))
    })
    .catch(error => console.error('Database connection error:', error));
