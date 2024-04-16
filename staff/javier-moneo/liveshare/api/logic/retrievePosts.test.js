import mongoose from 'mongoose';
import retrievePosts from './retrievePosts.js';

mongoose.connect('mongodb://localhost:27017/test').then(() => {
  try {
    retrievePosts('661d5398017fbdd3a49d091b')
      .then((posts) => console.log('retrieved posts', posts))
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
});
