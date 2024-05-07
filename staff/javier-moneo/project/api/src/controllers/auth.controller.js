import User from '../models/User.js';
import Role from '../models/Role.js';
import jwt from 'jsonwebtoken';
import Edition from '../models/Edition.js';
import Searcher from '../models/Searcher.js';
// import config from '../config.js';

// registro con roles
export const signUpWithRoles = async (req, res) => {
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
  // const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
  //   expiresIn: 86400,
  // }); // 24 horas
  const token = jwt.sign({ sub: savedUser._id }, process.env.JWT_SECRET, {
    expiresIn: 86400,
  }); // 24 horas

  res.status(200).json(token);
};

// registro sin roles
export const signUp = async (req, res) => {
  try {
    const { username, email, birthdate, password, editionCode, searcherName } =
      req.body;
    // console.log(req.body);

    const edition = await Edition.findOne({ code: editionCode });
    const searcher = await Searcher.findOne({ name: searcherName });
    const role = await Role.findOne({ name: 'user' }); // por defecto el user normal

    if (!edition) {
      return res.status(404).json({ message: 'No edition found' });
    }
    if (!searcher) {
      return res.status(404).json({ message: 'No searcher found' });
    }
    if (!role) {
      return res.status(404).json({ message: 'No role found' });
    }

    const newUser = new User({
      username,
      email,
      birthdate,
      password: await User.encryptPassword(password),
      edition: edition._id,
      searcher: searcher._id,
    });
    newUser.roles = [role._id];

    // console.log(newUser);

    const savedUser = await newUser.save();

    // todo el id es el sub
    // todo poner secret en .env
    // const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
    //   expiresIn: 86400,
    // }); // 24 horas

    // res.status(200).json({ token });
    return res.status(201).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
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
  // const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET, {
  //   expiresIn: 86400,
  // });
  const token = jwt.sign({ sub: userFound._id }, process.env.JWT_SECRET, {
    expiresIn: 86400,
  });

  console.log(userFound);

  return res.json(token);
};
