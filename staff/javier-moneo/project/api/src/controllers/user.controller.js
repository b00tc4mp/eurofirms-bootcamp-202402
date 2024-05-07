import User from '../models/User.js';
import Role from '../models/Role.js';

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
    return res.status(500).json({ message: error.message });
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
      return res.status(404).json({ message: 'User no found' });
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
    return res.status(500).json({ message: error.message });
  }
};
