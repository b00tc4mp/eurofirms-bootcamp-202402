import mongoose from 'mongoose';
import retrieveUser from './retrieveUser.js';

mongoose.connect('mongodb://localhost:27017/test').then(() => {
  try {
    retrieveUser('661d5398017fbdd3a49d091b', '661d536a017fbdd3a49d0918')
      .then((user) => console.log('user retrieved', user))
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
});
