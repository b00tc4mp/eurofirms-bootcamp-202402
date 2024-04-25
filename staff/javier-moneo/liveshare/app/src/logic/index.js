import registerUser from './registerUser';
import loginUser from './loginUser';
import retrieveUser from './retrieveUser';
import logoutUser from './logoutUser';
import getLoggedInUserId from './getLoggedInUserId';
import createPost from './createPost';
import retrievePosts from './retrievePosts';
import removePost from './removePost';
import modifyPost from './modifyPost';

const logic = {
  registerUser,
  loginUser,
  retrieveUser,
  logoutUser,
  getLoggedInUserId,
  createPost,
  retrievePosts,
  removePost,
  modifyPost
};

export default logic;
