import { validate, utils } from '../com';

function isUserAdmin() {
  validate.token(sessionStorage.token);

  const { roles } = utils.extractPayload(sessionStorage.token);

  // console.log({ roles });
  if (!roles) {
    return false;
  }

  const role = roles.filter((role) => role === 'admin');

  // console.log({ role });

  return role.length > 0 ? true : false;
}

export default isUserAdmin;
