import ReportSearch from '../models/ReportSearch.js';
import validate from '../libs/com/validate.js';
import errors from '../libs/com/errors.js';
import Search from '../models/Search.js';
import Edition from '../models/Edition.js';

const { ContentError, DuplicityError, MatchError, RangeError, TypeError } =
  errors;

export const createReport = async (req, res) => {
  try {
    const userId = req.userId; // porque la hemos pasado en middleware verifyToken

    const { searchId, editionId } = req.body;

    validate.id(searchId);
    validate.id(editionId);

    const search = await Search.findById(searchId);

    if (!search) {
      throw new MatchError('No Search found');
    }

    const edition = await Edition.findById(editionId);
    if (!edition) {
      throw new MatchError('No edition found');
    }

    const wasReportSearchAfter = await ReportSearch.findOne({
      edition: editionId,
      search: searchId,
    });

    if (wasReportSearchAfter) {
      throw new DuplicityError('This search had already been reported');
    }

    console.log({
      edition: editionId,
      search: searchId,
      userOwnerReport: userId,
      status: 'pending',
    });
    const newReportSearch = new ReportSearch({
      edition: editionId,
      search: searchId,
      userOwnerReport: userId,
      status: 'pending',
    });

    const reportSearchSaved = await newReportSearch.save();

    return res.status(201).send();
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
