import mongoose from 'mongoose';
import removePost from './removePost.js';

mongoose.connect('mongodb://localhost:27017/test').then(() => {
  try {
    removePost('662156f623da239c0823e28f', '6627c1b26da17d8ed226248e')
      .then(() => console.log('post deleted'))
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
});
