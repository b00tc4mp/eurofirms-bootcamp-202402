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

export const getReports = async (req, res) => {
  try {
    const userId = req.userId; // porque la hemos pasado en middleware verifyToken

    // options for the pagination
    const limit = parseInt(req.query.limit, 10) || 10;
    const page = parseInt(req.query.page, 10) || 1;

    const reportSearchs = await ReportSearch.paginate(
      { status: 'pending' },
      {
        limit,
        page,
        sort: { createdAt: -1 },
        populate: [
          { path: 'userOwnerReport', select: '_id username' },
          { path: 'edition', select: '_id name country language' },
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

    if (reportSearchs) {
      if (reportSearchs.docs) {
        reportSearchs.docs.map((reportSearch) => {
          if (reportSearch._id) {
            reportSearch.id = reportSearch._id;
            delete reportSearch._id;
          }

          if (reportSearch.userOwnerReport?._id) {
            reportSearch.userOwnerReport.id = reportSearch.userOwnerReport._id;
            delete reportSearch.userOwnerReport._id;
          }

          if (reportSearch.edition?._id) {
            reportSearch.edition.id = reportSearch.edition._id;
            delete reportSearch.edition._id;
          }

          if (reportSearch.search?._id) {
            reportSearch.search.id = reportSearch.search._id;
            delete reportSearch.search._id;
          }

          if (reportSearch.search?.edition?._id) {
            reportSearch.search.edition.id = reportSearch.search.edition._id;
            delete reportSearch.search.edition._id;
          }

          if (reportSearch.search?.tag?._id) {
            reportSearch.search.tag.id = reportSearch.search.tag._id;
            delete reportSearch.search.tag._id;
          }

          if (reportSearch.search?.user?._id) {
            reportSearch.search.user.id = reportSearch.search.user._id;
            delete reportSearch.search.user._id;
          }

          if (reportSearch.search?.searcher?._id) {
            reportSearch.search.searcher.id = reportSearch.search.searcher._id;
            delete reportSearch.search.searcher._id;
          }

          if (reportSearch.search?.searchType?._id) {
            reportSearch.search.searchType.id =
              reportSearch.search.searchType._id;
            delete reportSearch.search.searchType._id;
          }
        });
      }
    }

    return res.status(200).json(reportSearchs);
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
