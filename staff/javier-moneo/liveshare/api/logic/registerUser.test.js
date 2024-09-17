import mongoose from 'mongoose';
import registerUser from './registerUser.js';

mongoose.connect('mongodb://localhost:27017/test').then(() => {
  try {
    registerUser(
      'cuatro',
      '2000-01-01',
      'cuatro@gmail.com',
      'cuatro',
      '12345678'
    )
      .then(() => console.log('user registered'))
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
});
