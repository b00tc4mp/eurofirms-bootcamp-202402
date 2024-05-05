import User from '../models/User.js';
import Role from '../models/Role.js';
import jwt from 'jsonwebtoken';
// import config from '../config.js';

// registro
export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;
  // console.log(req.body);

  const userFounf = User.find({ email });

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });
  // console.log(newUser);

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: 'user' });
    newUser.roles = [role._id];
  }

  const savedUser = await newUser.save();

  // todo el id es el sub
  // todo poner secret en .env
  const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
    expiresIn: 86400,
  }); // 24 horas

  res.status(200).json({ token });
};

// login
export const signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    'roles'
  );

  if (!userFound) {
    return res.status(400).json({ message: 'User not found' });
  }

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPassword) {
    return res.status(401).json({ token: null, message: 'Invalid password' });
  }

  // TODO: id sera sub
  const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET, {
    expiresIn: 86400,
  });

  console.log(userFound);

  return res.json({ token });
};
