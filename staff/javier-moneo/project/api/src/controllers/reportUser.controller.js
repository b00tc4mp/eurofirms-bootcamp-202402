import ReportUser from '../models/ReportUser.js';
import validate from '../libs/com/validate.js';
import errors from '../libs/com/errors.js';
import User from '../models/User.js';
import Edition from '../models/Edition.js';

const { ContentError, DuplicityError, MatchError, RangeError, TypeError } =
  errors;

export const createReport = async (req, res) => {
  try {
    const userOwnerReportId = req.userId; // porque la hemos pasado en middleware verifyToken

    const { userId, editionId } = req.body;

    validate.id(userId);
    validate.id(editionId);

    const user = await User.findById(userId);

    if (!user) {
      throw new MatchError('No user found');
    }

    const edition = await Edition.findById(editionId);
    if (!edition) {
      throw new MatchError('No edition found');
    }

    const reportUser = await ReportUser.findOne({
      edition: editionId,
      user: userId,
    });

    if (!reportUser) {
      // si no existe se crea el report
      const newReportUser = new ReportUser({
        edition: editionId,
        user: userId,
        userOwnerReport: userOwnerReportId,
        status: 'pending',
      });

      const reportUserSaved = await newReportUser.save();

      return res.status(201).send();
    }
    // si existe
    // si esta pendiente o accepted no se toca
    // si esta discarded se actualiza
    if (reportUser.status === 'discarded') {
      reportUser.status = 'pending';
      reportUser.user = userId;
      await reportUser.save();
      return res.status(200).send();
    }
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

export const getReports = async (req, res) => {
  try {
    const userId = req.userId; // porque la hemos pasado en middleware verifyToken

    // options for the pagination
    const limit = parseInt(req.query.limit, 10) || 10;
    const page = parseInt(req.query.page, 10) || 1;

    const reportUsers = await ReportUser.paginate(
      { status: 'pending' },
      {
        limit,
        page,
        sort: { createdAt: -1 },
        populate: [
          { path: 'userOwnerReport', select: '_id username' },
          { path: 'edition', select: '_id name country language code' },
          {
            path: 'user',
            populate: [
              { path: 'roles', select: '_id name' },
              { path: 'edition', select: '_id name country language code' },
              { path: 'searcher', select: '_id name displayName' },
            ],
          },
        ],
        lean: true,
      }
    );

    if (reportUsers) {
      if (reportUsers.docs) {
        reportUsers.docs.map((reportUser) => {
          if (reportUser._id) {
            reportUser.id = reportUser._id;
            delete reportUser._id;
          }

          if (reportUser.userOwnerReport?._id) {
            reportUser.userOwnerReport.id = reportUser.userOwnerReport._id;
            delete reportUser.userOwnerReport._id;
          }

          if (reportUser.edition?._id) {
            reportUser.edition.id = reportUser.edition._id;
            delete reportUser.edition._id;
          }

          if (reportUser.user?._id) {
            reportUser.user.id = reportUser.user._id;
            delete reportUser.user._id;
          }

          if (reportUser.user?.edition?._id) {
            reportUser.user.edition.id = reportUser.user.edition._id;
            delete reportUser.user.edition._id;
          }

          if (reportUser.user?.searcher?._id) {
            reportUser.user.searcher.id = reportUser.user.searcher._id;
            delete reportUser.user.searcher._id;
          }

          if (reportUser.user?.roles) {
            reportUser.user?.roles.map((role) => {
              if (role._id) {
                role.id = role._id;
                delete role._id;
              }
            });
          }
        });
      }
    }

    return res.status(200).json(reportUsers);
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

export const removeReport = async (req, res) => {
  try {
    const userId = req.userId; // porque la hemos pasado en middleware verifyToken

    const { reportUserId } = req.body;

    const reportUser = await ReportUser.findById(reportUserId).lean().exec();

    if (!reportUser) {
      throw new MatchError('ReportUser no found');
    }

    const userToBan = await User.findById(reportUser.user)
      .populate('roles', '_id name')
      .lean()
      .exec();

    if (!userToBan) {
      throw new MatchError('User to ban no found');
    }

    userToBan.roles.map((role) => {
      if (role.name === 'moderator' || role.name === 'admin') {
        throw new MatchError('Can not ban moderator or admin');
      }
    });

    // set report to accepted
    await ReportUser.findByIdAndUpdate(reportUserId, {
      status: 'accepted',
    });

    await User.findByIdAndUpdate(reportUser.user, { isBanned: true });

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

export const discardReport = async (req, res) => {
  try {
    const userId = req.userId; // porque la hemos pasado en middleware verifyToken

    const { reportUserId } = req.body;

    const reportUser = await ReportUser.findById(reportUserId).lean().exec();

    // set report to accepted
    if (!reportUser) {
      throw new MatchError('ReportUser no found');
    }

    await ReportUser.findByIdAndUpdate(reportUserId, {
      status: 'discarded',
    });

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
