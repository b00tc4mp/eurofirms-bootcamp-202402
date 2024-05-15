import ReportComment from '../models/ReportComment.js';
import validate from '../libs/com/validate.js';
import errors from '../libs/com/errors.js';
import Comment from '../models/Comment.js';
import Search from '../models/Search.js';

const { ContentError, DuplicityError, MatchError, RangeError, TypeError } =
  errors;

export const createReport = async (req, res) => {
  try {
    const userOwnerReportId = req.userId; // porque la hemos pasado en middleware verifyToken

    const { searchId, commentId } = req.body;

    validate.id(searchId);
    validate.id(commentId);

    const search = await Search.findById(searchId);
    if (!search) {
      throw new MatchError('No search found');
    }

    const comment = await Comment.findById(commentId);
    if (!comment) {
      throw new MatchError('No comment found');
    }

    const reportComment = await ReportComment.findOne({
      edition: search.edition,
      search: search._id,
      comment: commentId,
    });

    if (!reportComment) {
      // si no existe se crea el report
      const newReportComment = new ReportComment({
        edition: search.edition,
        search: search._id,
        comment: commentId,
        userOwnerReport: userOwnerReportId,
        status: 'pending',
      });

      const reportUserSaved = await newReportComment.save();

      return res.status(201).send();
    }
    // si existe
    // si esta pendiente o accepted no se toca
    // si esta discarded se actualiza
    if (reportComment.status === 'discarded') {
      reportComment.status = 'pending';
      reportComment.userOwnerReport = userOwnerReportId;
      await reportComment.save();
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
