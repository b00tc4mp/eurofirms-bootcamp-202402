// import registerUser from './registerUser'
// import loginUser from './loginUser'
// import retrieveUser from './retrieveUser'
import logoutUser from './logoutUser';
import getLoggedInUserId from './getLoggedInUserId';
import isUserLoggedIn from './isUserLoggedIn';
import retrieveEditions from './retrieveEditions';
import retrieveSearchersActive from './retrieveSearchersActive';
import registerUser from './registerUser';
import loginUser from './loginUser';
import retrieveUser from './retrieveUser';

const logic = {
  isUserLoggedIn,
  getLoggedInUserId,
  logoutUser,
  loginUser,
  retrieveEditions,
  retrieveSearchersActive,
  registerUser,
  retrieveUser,
};

export default logic;
