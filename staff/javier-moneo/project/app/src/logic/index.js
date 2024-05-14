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
import retrieveSearchTypeByName from './retrieveSearchTypeByName';
import createSearch from './createSearch';
import retrieveSearcherById from './retrieveSearcherById';
import retrieveTagByEditionIdAndName from './retrieveTagByEditionIdAndName';
import retrieveSearchesByEditionIdAndSearcherIdAndSearchTypeIdAndTagId from './retrieveSearchesByEditionIdAndSearcherIdAndSearchTypeIdAndTagId';
import reportSearch from './reportSearch';
import reportUser from './reportUser';
import reportTag from './reportTag';
import voteSearch from './voteSearch';
import retrieveSearchById from './retrieveSearchById';
import createComment from './createComment';
import retrieveCommentsBySearchId from './retrieveCommentsBySearchId';

const logic = {
  createSearch,
  createComment,
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
  retrieveSearchTypeByName,
  retrieveSearcherById,
  retrieveTagByEditionIdAndName,
  retrieveSearchesByEditionIdAndSearcherIdAndSearchTypeIdAndTagId,
  retrieveSearchById,
  reportSearch,
  reportUser,
  reportTag,
  retrieveCommentsBySearchId,
  voteSearch,
};

export default logic;
