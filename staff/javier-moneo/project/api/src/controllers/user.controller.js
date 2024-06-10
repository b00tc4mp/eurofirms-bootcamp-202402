import User from '../models/User.js';
import Role from '../models/Role.js';
import validate from '../libs/com/validate.js';
import errors from '../libs/com/errors.js';

const { ContentError, DuplicityError, MatchError, RangeError, TypeError } =
  errors;

export const createUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // creating a new User
    const user = new User({
      username,
      email,
      password,
      roles: rolesFound.map((role) => role._id),
    });

    // encrypting password
    user.password = await User.encryptPassword(user.password);

    // saving the new user
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      roles: savedUser.roles,
    });
  } catch (error) {
    console.error(error);
    let status = 500;

    if (
      error instanceof TypeError ||
      error instanceof RangeError ||
      error instanceof ContentError ||
      error instanceof DuplicityError
    ) {
      status = 400;
    }

    return res
      .status(status)
      .json({ error: error.constructor.name, message: error.message });
  }
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  return res.json(users);
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId, '-password')
      .populate('edition', '-createdAt -updatedAt')
      .populate('searcher', '-createdAt -updatedAt')
      .lean()
      .exec();

    if (!user) {
      throw new MatchError('User no found');
    }

    if (user._id) {
      user.id = user._id;
      delete user._id;
    }

    if (user.edition?._id) {
      user.edition.id = user.edition._id;
      delete user.edition._id;
    }

    if (user.searcher?._id) {
      user.searcher.id = user.searcher._id;
      delete user.searcher._id;
    }

    return res.json(user);
  } catch (error) {
    console.error(error);
    let status = 500;

    if (
      error instanceof TypeError ||
      error instanceof RangeError ||
      error instanceof ContentError ||
      error instanceof DuplicityError
    ) {
      status = 400;
    }

    return res
      .status(status)
      .json({ error: error.constructor.name, message: error.message });
  }
};

export const assignRoleModerator = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email: email })
      .populate('roles', '_id name')
      .lean()
      .exec();

    if (!user) {
      throw new MatchError('No user found');
    }

    const roleFound = await Role.findOne({ name: 'moderator' });

    if (!roleFound) {
      throw new MatchError('No role found');
    }

    const rolesToAssign = [];

    user.roles.forEach((roleUser) => {
      rolesToAssign.push(roleUser._id);
      if (roleUser.name === 'moderator') {
        //ya tiene el rol
        // console.log('ya tiene el rol');
        return res.status(200).send();
      }
    });

    rolesToAssign.push(roleFound._id);

    await User.findByIdAndUpdate(user._id, { roles: rolesToAssign });

    return res.status(200).send();
  } catch (error) {
    console.error(error);
    let status = 500;

    if (
      error instanceof TypeError ||
      error instanceof RangeError ||
      error instanceof ContentError ||
      error instanceof DuplicityError
    ) {
      status = 400;
    }

    return res
      .status(status)
      .json({ error: error.constructor.name, message: error.message });
  }
};

export const removeRoleModerator = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email: email })
      .populate('roles', '_id name')
      .lean()
      .exec();

    if (!user) {
      throw new MatchError('No user found');
    }

    const roleFound = await Role.findOne({ name: 'moderator' });

    if (!roleFound) {
      throw new MatchError('No role found');
    }

    const rolesToAssign = [];

    user.roles.forEach((roleUser) => {
      if (roleUser.name !== 'moderator') {
        rolesToAssign.push(roleUser._id);
        //ya tiene el rol
        console.log('tenia el role moderator');
      }
    });

    await User.findByIdAndUpdate(user._id, { roles: rolesToAssign });

    return res.status(200).send();
  } catch (error) {
    console.error(error);
    let status = 500;

    if (
      error instanceof TypeError ||
      error instanceof RangeError ||
      error instanceof ContentError ||
      error instanceof DuplicityError
    ) {
      status = 400;
    }

    return res
      .status(status)
      .json({ error: error.constructor.name, message: error.message });
  }
};
