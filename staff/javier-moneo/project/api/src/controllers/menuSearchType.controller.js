import MenuSearchType from '../models/MenuSearchType.js';

export const getMenuSearchTypesByEditionAndSearcher = async (req, res) => {
  try {
    const editionId = req.params.editionId;
    const searcherId = req.params.searcherId;
    // console.log({ editionId, searcherId });

    const menuSearchTypes = await MenuSearchType.find(
      {
        edition: editionId,
        searcher: searcherId,
      },
      '-createdAt -updatedAt',
      {
        sort: { index: 1 },
      }
    )
      .populate('searchType')
      .lean()
      .exec();

    menuSearchTypes.map((menuSearchType) => {
      if (menuSearchType._id) {
        menuSearchType.id = menuSearchType._id;
        delete menuSearchType._id;
      }

      if (menuSearchType.searchType?._id) {
        menuSearchType.searchType.id = menuSearchType.searchType._id;
        delete menuSearchType.searchType._id;
      }
    });

    return res.json(menuSearchTypes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
