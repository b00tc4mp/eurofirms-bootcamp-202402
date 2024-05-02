import mongoose from 'mongoose';
import retrieveUser from './retrieveUser.js';

mongoose.connect('mongodb://localhost:27017/test').then(() => {
  try {
    retrieveUser('66215c6a268934241b1cdb96', '662156f623da239c0823e28f')
      .then((user) => console.log('user retrieved', user))
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
});
