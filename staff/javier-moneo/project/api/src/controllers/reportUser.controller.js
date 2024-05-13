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

    // if (wasReportUserAfter) {
    //   throw new DuplicityError('This user had already been reported');
    // }
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
