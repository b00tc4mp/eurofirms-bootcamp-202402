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
