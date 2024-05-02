import mongoose from 'mongoose';
import modifyPost from './modifyPost.js';

mongoose.connect('mongodb://localhost:27017/test').then(() => {
  try {
    modifyPost(
      '662156f623da239c0823e28f',
      '662a7f59aaee15959dd619b2',
      'new text'
    )
      .then(() => console.log('post modified'))
      .catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
});
