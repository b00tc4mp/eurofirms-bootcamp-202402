import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Role from '../models/Role.js';

import errors from '../libs/com/errors.js';

const {
  ContentError,
  DuplicityError,
  MatchError,
  RangeError,
  TypeError,
  SystemError,
} = errors;

/**
 * Para verificar en rutas si el token y el usuario existen.
 * Es el primer middleware que se debe ejecutar
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
export const verifyToken = async (req, res, next) => {
  try {
    const authorization = req.headers['authorization'];

    if (!authorization)
      return res.status(403).json({
        message: 'No authorization provided, add token with Bearer please',
      });

    const token = authorization.slice(7);

    if (!token) {
      return res
        .status(403)
        .json({ message: 'No token provided, add token with Bearer please' });
    }

    // console.log(token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.userId = decoded.id;
    req.userId = decoded.sub; // sub porque en mi app interna use sub en vez de id

    const user = await User.findById(req.userId, { password: 0 });
    if (!user) {
      return res.status(404).json({ message: 'no user found' });
    }

    // console.log(decoded);

    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Unauthorized' });
  }
};

/**
 * Primero debes ejecutar el verifyToken
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
export const isUserBanned = async (req, res, next) => {
  try {
    // porque hemos pasado en verifyToken el userId
    const user = await User.findById(req.userId);

    if (user.isUserBanned) {
      return res.status(403).json({ message: 'User is banned' });
    }

    next();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: error.constructor.name, message: error.message });
  }
};

export const isModerator = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId); // porque hemos pasado en verifyToken el userId

    const roles = await Role.find({ _id: { $in: user.roles } });
    console.log(roles);

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === 'moderator') {
        next();
        return;
      }
    }

    // return res.status(403).json({ message: 'Require Moderator role' });
    throw new SystemError('Require Moderator role');
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

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId); // porque hemos pasado en verifyToken el userId

  const roles = await Role.find({ _id: { $in: user.roles } });
  console.log(roles);

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === 'admin') {
      next();
      return;
    }
  }

  return res.status(403).json({ message: 'Require Admin role' });
};
