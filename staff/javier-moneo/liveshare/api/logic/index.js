import registerUser from './registerUser.js';
import authenticateUser from './authenticateUser.js';
import retrieveUser from './retrieveUser.js';
import createPost from './createPost.js';
import retrievePosts from './retrievePosts.js';
import removePost from './removePost.js';
import modifyPost from './modifyPost.js';
import retrievePostsFromUser from './retrievePostsFromUser.js';

const logic = {
  registerUser,
  authenticateUser,
  retrieveUser,
  createPost,
  retrievePosts,
  removePost,
  modifyPost,
  retrievePostsFromUser,
};

export default logic;
