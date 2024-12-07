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

export const getReports = async (req, res) => {
  try {
    const userId = req.userId; // porque la hemos pasado en middleware verifyToken

    // options for the pagination
    const limit = parseInt(req.query.limit, 10) || 10;
    const page = parseInt(req.query.page, 10) || 1;

    const reportComments = await ReportComment.paginate(
      { status: 'pending' },
      {
        limit,
        page,
        sort: { createdAt: -1 },
        populate: [
          { path: 'userOwnerReport', select: '_id username' },
          { path: 'edition', select: '_id name country language' },
          {
            path: 'comment',
            populate: [{ path: 'user', select: '_id username' }],
          },
          {
            path: 'search',
            populate: [
              { path: 'user', select: '_id username' },
              { path: 'tag', select: '_id name' },
              { path: 'edition', select: '_id name code language country' },
              { path: 'searcher', select: '_id name displayName' },
              { path: 'searchType', select: '_id name' },
            ],
          },
        ],
        lean: true,
      }
    );

    if (reportComments) {
      if (reportComments.docs) {
        reportComments.docs.map((reportComment) => {
          if (reportComment._id) {
            reportComment.id = reportComment._id;
            delete reportComment._id;
          }

          if (reportComment.userOwnerReport?._id) {
            reportComment.userOwnerReport.id =
              reportComment.userOwnerReport._id;
            delete reportComment.userOwnerReport._id;
          }

          if (reportComment.edition?._id) {
            reportComment.edition.id = reportComment.edition._id;
            delete reportComment.edition._id;
          }

          if (reportComment.search?._id) {
            reportComment.search.id = reportComment.search._id;
            delete reportComment.search._id;
          }

          if (reportComment.search?.edition?._id) {
            reportComment.search.edition.id = reportComment.search.edition._id;
            delete reportComment.search.edition._id;
          }

          if (reportComment.search?.tag?._id) {
            reportComment.search.tag.id = reportComment.search.tag._id;
            delete reportComment.search.tag._id;
          }

          if (reportComment.search?.user?._id) {
            reportComment.search.user.id = reportComment.search.user._id;
            delete reportComment.search.user._id;
          }

          if (reportComment.search?.searcher?._id) {
            reportComment.search.searcher.id =
              reportComment.search.searcher._id;
            delete reportComment.search.searcher._id;
          }

          if (reportComment.search?.searchType?._id) {
            reportComment.search.searchType.id =
              reportComment.search.searchType._id;
            delete reportComment.search.searchType._id;
          }

          if (reportComment.comment?._id) {
            reportComment.comment.id = reportComment.comment._id;
            delete reportComment.comment._id;
          }

          if (reportComment.comment?.user?._id) {
            reportComment.comment.user.id = reportComment.comment.user._id;
            delete reportComment.comment.user._id;
          }
        });
      }
    }

    return res.status(200).json(reportComments);
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

    const { reportCommentId } = req.body;

    const reportComment = await ReportComment.findById(reportCommentId)
      .lean()
      .exec();

    // set report to accepted
    if (!reportComment) {
      throw new MatchError('ReportComment no found');
    }

    await ReportComment.findByIdAndUpdate(reportCommentId, {
      status: 'accepted',
    });

    const comment = await Comment.findById(reportComment.comment);

    if (!comment) {
      throw new MatchError('Comment no found');
    }

    await Comment.findByIdAndUpdate(reportComment.comment, { isBanned: true });

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

    const { reportCommentId } = req.body;

    const reportComment = await ReportComment.findById(reportCommentId)
      .lean()
      .exec();

    // set report to accepted
    if (!reportComment) {
      throw new MatchError('ReportComment no found');
    }

    await ReportComment.findByIdAndUpdate(reportCommentId, {
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
