import ReportTag from '../models/ReportTag.js';
import validate from '../libs/com/validate.js';
import errors from '../libs/com/errors.js';
import User from '../models/User.js';
import Tag from '../models/Tag.js';
import Edition from '../models/Edition.js';

const { ContentError, DuplicityError, MatchError, RangeError, TypeError } =
  errors;

export const createReport = async (req, res) => {
  try {
    const userOwnerReportId = req.userId; // porque la hemos pasado en middleware verifyToken

    const { editionId, tagId } = req.body;

    validate.id(editionId);
    validate.id(tagId);

    const edition = await Edition.findById(editionId);
    if (!edition) {
      throw new MatchError('No edition found');
    }

    const tag = await Tag.findById(tagId);
    if (!tag) {
      throw new MatchError('No tag found');
    }

    if (tag.name === 'NoTagged') {
      throw new ContentError('You can not report tag NoTagged');
    }

    const reportTag = await ReportTag.findOne({
      edition: editionId,
      tag: tagId,
    });

    if (!reportTag) {
      // si no existe se crea el report
      const newReportg = new ReportTag({
        edition: editionId,
        userOwnerReport: userOwnerReportId,
        tag: tagId,
        status: 'pending',
      });

      const reportUserSaved = await newReportg.save();

      return res.status(201).send();
    }
    // si existe
    // si esta pendiente o accepted no se toca
    // si esta discarded se actualiza
    if (reportTag.status === 'discarded') {
      reportTag.status = 'pending';
      reportTag.userOwnerReport = userOwnerReportId;
      await reportTag.save();
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

    const reportTags = await ReportTag.paginate(
      { status: 'pending' },
      {
        limit,
        page,
        sort: { createdAt: -1 },
        populate: [
          { path: 'userOwnerReport', select: '_id username' },
          { path: 'edition', select: '_id name country language code' },
          { path: 'tag', populate: [{ path: 'user', select: '_id username' }] },
        ],
        lean: true,
      }
    );

    if (reportTags) {
      if (reportTags.docs) {
        reportTags.docs.map((reportTag) => {
          if (reportTag._id) {
            reportTag.id = reportTag._id;
            delete reportTag._id;
          }

          if (reportTag.userOwnerReport?._id) {
            reportTag.userOwnerReport.id = reportTag.userOwnerReport._id;
            delete reportTag.userOwnerReport._id;
          }

          if (reportTag.edition?._id) {
            reportTag.edition.id = reportTag.edition._id;
            delete reportTag.edition._id;
          }

          if (reportTag.tag?._id) {
            reportTag.tag.id = reportTag.tag._id;
            delete reportTag.tag._id;
          }

          if (reportTag.tag?.user?._id) {
            reportTag.tag.user.id = reportTag.tag.user._id;
            delete reportTag.tag.user._id;
          }
        });
      }
    }

    return res.status(200).json(reportTags);
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

    const { reportTagId } = req.body;

    const reportTag = await ReportTag.findById(reportTagId).lean().exec();

    // set report to accepted
    if (!reportTag) {
      throw new MatchError('ReportTag no found');
    }

    await ReportTag.findByIdAndUpdate(reportTagId, {
      status: 'accepted',
    });

    const tag = await Tag.findById(reportTag.tag);

    if (!tag) {
      throw new MatchError('Tag no found');
    }

    await Tag.findByIdAndUpdate(reportTag.tag, { isBanned: true });

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

    const { reportTagId } = req.body;

    const reportTag = await ReportTag.findById(reportTagId).lean().exec();

    // set report to accepted
    if (!reportTag) {
      throw new MatchError('ReportTag no found');
    }

    await ReportTag.findByIdAndUpdate(reportTagId, {
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
