import mongoose from 'mongoose';
import retrievePostsFromUser from './retrievePostsFromUser.js';

mongoose.connect('mongodb://localhost:27017/test').then(() => {
  try {
    retrievePostsFromUser(
      '662156f623da239c0823e28f',
      '662156f623da239c0823e28f'
    )
      .then((posts) => console.log('retrieved posts', posts))
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
});
