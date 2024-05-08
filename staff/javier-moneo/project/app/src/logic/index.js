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
import retrieveSearcherByName from './retrieveSearcherByName';
import retrieveEditionByCode from './retrieveEditionByCode';
import retrieveMenuSearchTypesByEditionAndSearcherId from './retrieveMenuSearchTypesByEditionAndSearcherId';

const logic = {
  isUserLoggedIn,
  getLoggedInUserId,
  logoutUser,
  loginUser,
  retrieveEditions,
  retrieveSearchersActive,
  registerUser,
  retrieveUser,
  retrieveSearcherByName,
  retrieveEditionByCode,
  retrieveMenuSearchTypesByEditionAndSearcherId,
};

export default logic;
