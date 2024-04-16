import mongoose from 'mongoose';
import createPost from './createPost.js';

mongoose.connect('mongodb://localhost:27017/test').then(() => {
  try {
    createPost(
      '661d5398017fbdd3a49d091b',
      'https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png',
      'hello mern'
    )
      .then(() => console.log('post created'))
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
});
